import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";
import LanguageList from "./LanguageList";

const Language = () => {
    const [languageVisible, setLanguageVisible] = useState(false)
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn


    const changeLanguage = () => {
        setLanguageVisible(!languageVisible)
    }

    return (
        <div className="items-center relative h-7 items-center  tracking-wider duration-300 uppercase text-2xs font-500
                        padding-huge  items-center hover:bg-opacity-70 rounded  flex  flex-row mt-2 lg:mt-0 ">
            <button type="button"
                    onClick={changeLanguage}
                    className=" px-2 py-1 rounded text-black text-2xl  duration-300 bg-gray-300 dark:bg-white whitespace-nowrap">
                {lang.languageBtn}
            </button>
            {languageVisible && <div className="language__block absolute z-10  w-25 mt-2 origin-top-right bg-white divide-y
                             rounded-md shadow-lg  top-10 lg:right-0 focus:outline-none">
               <LanguageList changeLanguage={changeLanguage} languageVisible={languageVisible} setLanguageVisible={setLanguageVisible}/>
            </div>}
        </div>
    );
};

export default Language;
