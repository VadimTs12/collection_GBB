import React from 'react';
import FilterIcon from "../icons/FilterIcon";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";

const FilterButton = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn
    const openFilterBody = () => {
        dispatch({type: "FILTER_VISIBLE"})
    }

    return (
        <button type="button" className="lg:hidden flex hover:opacity-50" onClick={openFilterBody}>
            <FilterIcon/>
            <span
                className="uppercase tracking-wide text-xs font-mono pt-0.5 pl-2 text-black dark:text-white duration-300">{lang.gallery.collection.filterText}</span>
        </button>
    );
};

export default FilterButton;
