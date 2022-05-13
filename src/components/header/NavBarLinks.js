import React, {useEffect, useState} from 'react';
import ALink from "../ALink";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";
import {useRouter} from "next/router";

const NavBarLinks = () => {
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn
    useEffect(() => {
        setNavBarLinks([
            {
                title: lang.header.home,
                link: '/'
            },
            {
                title: lang.header.gallery,
                link: '/gallery'
            },
            {
                title: lang.header.about,
                link: '/about'
            },
            {
                title: lang.header.mindmap,
                link: '/mindmap'
            }
        ])
    }, [locale])

    const [navbarLinks, setNavBarLinks] = useState([])

    const closeMenu = () => {
        document.documentElement.classList.remove("menu-open");
    }
    return (
        <div className="flex lg:flex-row flex-col w-full ">
            {navbarLinks.map(navbarLinksItem =>
                <li key={navbarLinksItem.title}
                    className="items-center relative  items-center  tracking-wider px-2 py-1 lg:mx-2
                               border-b-2 lg:border-b-0
                               g:px-2 uppercase text-2xl font-500 padding-huge  items-center  hover:bg-opacity-70 rounded
                               flex lg:justify-center  justify-start flex-row
                               lg:bg-gray-300 lg:dark:bg-neutral-800
                               text-black dark:text-white duration-300"
                    onClick={closeMenu}>

                    <ALink href={navbarLinksItem.link} text={navbarLinksItem.title}/>
                </li>
            )}
        </div>
    );
};

export default NavBarLinks;
