import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";

const FilterCheck = () => {
    const checked = useSelector(state => state.checked)
    const dispatch = useDispatch()
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn

    useEffect(() => {
        const checkboxes = [...document.querySelectorAll('[type="checkbox"]')]
        let checkedValue = checked.map(elem => {
            return elem.value
        })
        checkboxes.forEach(item => {
            if (!checkedValue.includes(item.value)) {
                item.checked = false
            }
        })
    }, [checked])

    const removeChecked = (value) => {
        dispatch({type: "REMOVE_CHECK", payload: value})
    }

    return (
        <div className=" filter-check  mx-auto  flex items-center ">
            <h3
                className="text-xs flex pr-2 items-center font-semibold uppercase tracking-wide opacity-50 text-black dark:text-white duration-300">{lang.gallery.collection.filterText}</h3>
            {checked && <div className="sm:mt-0  sm:ml-2 h-full">
                <div className="flex item-center flex-wrap">
                    <div>
                        {checked.map(checkedItem =>
                            <button key={checkedItem.value}
                                    onClick={() => removeChecked(checkedItem)}
                                    className="m-1 group  whitespace-nowrap relative fade-in inline-flex rounded-full border border-gray-200
                                               items-center lg:p-1.5 p-1 pl-1.5 lg:text-1xl text-sm font-400 tracking-wide uppercase hover:bg-gray-100 bg-white">
                                <span className="dark:text-black">{checkedItem.value.split('-').join(': ')}</span>
                                <div className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex opacity-40 ">
                                    <svg className="h-2 w-2 dark:fill-black dark:text-black" stroke="currentColor"
                                         fill="black"
                                         viewBox="0 0 8 8">
                                        <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"></path>
                                    </svg>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default FilterCheck;
