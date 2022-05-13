import React from 'react';
import Shuffle from "../icons/Shuffle";
import {useRouter} from "next/router";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";

const ShuffleButton = ({clickShuffle}) => {
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn
    return (
        <button className="flex hover:opacity-60 duration-300 lg:py-2 lg:px-4 lg:rounded mr-4 lg:mr-0 lg:bg-gray-200"
                onClick={clickShuffle}>
            <Shuffle/>
            <span className="hidden lg:block uppercase tracking-wide text-xs font-mono pt-0.5 pl-2 text-black">{lang.gallery.collection.shuffleText}</span>
        </button>
    );
};

export default ShuffleButton;
