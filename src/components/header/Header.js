import React, {useState} from 'react';
import NavBarLinks from "./NavBarLinks";
import NavBarLinksSocial from "./NavBarLinksSocial";
import Language from "./Language";
import ButtonBurger from "./ButtonBurger";
import ButtonTheme from "./ButtonTheme";
import Link from "next/link";

const Header = ({headerStyle, lang}) => {
    const [menuOpen, setMenuOpen] = useState(false)

        const menuInit = () => setMenuOpen(!menuOpen)
        return (
            <header className={(menuOpen ? 'menu-open' : '') + " header fixed z-20 w-full " + headerStyle.join(' ')}>
                <nav className="nav w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 ">
                    <div className="flex  w-full h-full border-b border-white items-center justify-between mx-auto border-opacity-0">
                        <div className="flex-grow">
                            <div className="flex">
                                <div className="w-min-content">
                                    <h1 className="text-2xl  font-extrabold text-white bg-purple-700 rounded-md px-2">
                                        Ghetto Baby Boy
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <ul className="menu__body
                            lg:flex flex-col lg:flex-row items-center lg:justify-between
                            w-full h-full lg:w-max lg:h-max
                            pt-20 lg:pt-0
                            absolute top-0 left-0 lg:relative
                            opacity-0 hidden lg:opacity-100
                            bg-gray-100/80 backdrop-blur-md
                            lg:backdrop-blur-none
                            lg:bg-inherit
                            dark:bg-neutral-900/70 dark:lg:bg-inherit
                            text-3xl lg:text-xl
                             overflow-auto lg:overflow-visible">
                            <NavBarLinks lang={lang}/>
                            <NavBarLinksSocial/>
                            <div className="hidden lg:block">
                                <ButtonTheme/>
                            </div>
                            <Language/>
                        </ul>

                        <div className="block lg:hidden">
                            <ButtonTheme/>
                        </div>

                        <ButtonBurger menuInit={menuInit}/>
                    </div>
                </nav>
            </header>

        )
    }
;

export default Header;
