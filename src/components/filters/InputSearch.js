import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";

const InputSearch = () => {
    const dispatch = useDispatch()
    const textSearch = useSelector(state => state.textSearch)
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn

    useEffect(() => {
        const textSearchNow = document.querySelector('[type="text"]')
        if (textSearch === '') {
            textSearchNow.value = ''
        }
    }, [textSearch])

    const setTextSearch = (target) => {
        if (target) {
            dispatch({type: "ADD_TEXT_SEARCH", payload: target})
        } else {
            dispatch({type: "REMOVE_TEXT_SEARCH", payload: target})
        }
    }

    return (
        <div
            className="  focus:border-red-300 focus-within:border-b-black border-b-2  mx-5 mt-2 relative border-opacity-10  items-center border-black
                 dark:border-gray-200">
            <input maxLength="4"
                   type="text"
                   className="form-control  text-sm  focus:outline-none active:outline-none border-0 border-none bg-transparent text-black dark:text-white "
                   onChange={(event) => {
                       event.target.value = event.target.value.replace(/[^0-9]/g, '')
                       setTextSearch(event.target.value)
                   }
                   }
                   placeholder={lang.gallery.filter.inputSearch}
            />
        </div>
    );
};

export default InputSearch;
