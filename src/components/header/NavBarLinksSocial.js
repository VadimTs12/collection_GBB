import React, {useState} from 'react';
import Twitter from "../icons/Twitter";
import Telegram from "../icons/Telegram";
import Opensea from "../icons/Opensea";
import Discord from "../icons/Discord";
import Instagram from "../icons/Instagram";

const NavBarLinksSocial = () => {
    const [navBarLinksSocial, setNavBarLinksSocial] = useState(
        [
            {
                title: 'Twitter',
                link: 'https://twitter.com',
                image: <Twitter/>
            },
            {
                title: 'Telegram',
                link: '',
                image: <Telegram/>
            },
            {
                title: 'Opensea',
                link: 'https://opensea.io',
                image: <Opensea/>
            },
            {
                title: 'Discord',
                link: 'https://discord.com',
                image: <Discord/>
            },
            {
                title: 'Instagram',
                link: 'https://instagram.com',
                image: <Instagram/>
            }
        ]
    )
    return (
        <li className="w-full flex justify-start items-center lg:flex-row flex-col ">
            {navBarLinksSocial.map(navBarLinksSocialItem =>
                <a key={navBarLinksSocialItem.title}
                   href={navBarLinksSocialItem.link}
                   className="bg-opacity-0 w-full text-black opacity-80 items-center relative  items-center
                              tracking-wider
                              border-b-2 lg:border-b-0
                              lg:px-2 py-1 duration-300 uppercase text-2xs font-500 padding-huge  duration-300
                              items-center
                              hover:bg-opacity-70 rounded
                              flex lg:justify-center justify-start flex-row
                               {/*bg-gray-300 dark:bg-neutral-800*/}
                               duration-300 dark:text-white">
                    <div className="flex justify-between items-center w-full px-2 lg:px-0">
                        <p className="lg:hidden text-2xl">{navBarLinksSocialItem.title}</p>
                        <div>
                            {navBarLinksSocialItem.image}
                        </div>
                    </div>
                </a>
            )}
        </li>
    );
};

export default NavBarLinksSocial;
