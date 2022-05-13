import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";

const LanguageList = ({changeLanguage, languageVisible, setLanguageVisible}) => {
    const [languages, setLanguages] = useState([
        {
            lang: 'ENGLISH',
            locale: 'en'
        },
        {
            lang: 'Русский',
            locale: 'ru'
        },
        {
            lang: '简体中文',
            locale: 'cn'
        }
    ])
    const router = useRouter()


    return (
        <div className="px-1 py-1 "
             role="none">
            {languages.map(languageItem =>
                <button
                    onClick={() => {
                        router.push(router.route, router.asPath, {locale: languageItem.locale})
                        changeLanguage()
                    }}
                    key={languageItem.locale}
                    className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2  tracking-wider pt-0.5 first::pt-0 duration-300 uppercase whitespace-nowrap text-2xs font-500">
                    {languageItem.lang}
                </button>
            )}
        </div>
    );
};

export default LanguageList;
