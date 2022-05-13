import React, {useEffect} from 'react';
import ItemFilter from "./ItemFilter";
import {useDispatch, useSelector} from "react-redux";
import InputSearch from "./InputSearch";
import {useRouter} from "next/router";
import en from "../../locales/en";
import ru from "../../locales/ru";
import cn from "../../locales/cn";
import Close from "../icons/Close";

const Filters = ({filtersGallery}) => {
    const filterBlock = useSelector(state => state.filterBlock)
    const dispatch = useDispatch()
    const router = useRouter();
    const {locale} = router;
    const lang = (locale === "en") ? en :
        locale === "ru" ? ru : cn

    const closeFilterBody = () => {
        dispatch({type: "FILTER_INVISIBLE"})
    }

    useEffect(() => {
        if(filterBlock) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [filterBlock])

    return (
        <div
            className={(filterBlock ? 'visible' : '') + " filter w-full h-screen lg:w-1/4 col-start-1 z-30 lg:sticky fixed top-0 bottom-0 lg:pt-28  overflow-y-scroll overflow-x-hidden bg-gray-100/30 backdrop-blur-md  lg:bg-inherit lg:backdrop-blur-none dark:bg-neutral-900/70 lg:dark:bg-inherit"}
            onClick={closeFilterBody} >
            <div
                className="filter-content pt-20 lg:pt-0 h-full lg:w-full  lg:h-auto ml-auto bg-white lg:bg-inherit dark:bg-neutral-900  lg:dark:bg-inherit"
                onClick={(e) => e.stopPropagation()} >
                <div className="flex justify-between px-5">
                    <h1 className="title-filter text-4xl uppercase font-extrabold tracking-tight text-black dark:text-white duration-300">{lang.gallery.filter.title}</h1>
                    <button type="button"
                            className="close-menu -mr-2 w-10 rounded-md flex items-center justify-center opacity-50 lg:hidden"
                        onClick={closeFilterBody} >
                        <Close/>
                    </button>
                </div>
             <InputSearch/>
                <div className="filter-body  p-5 ">
                    {filtersGallery.map(itemFilter =>
                        <ItemFilter key={itemFilter.id} itemFilter={itemFilter}/>
                    )}
                </div>
            </div>
            <style jsx>{`
              @media (max-width: 1023px) {
                .filter {
                  transform: translate(110%);
                  transition: 0.5s;
                }

                .filter-content {
                  width: 320px;
                }

                .visible {
                  transform: translate(0);
                  transition: 0.5s;
                  left: 0;
                }
              }
            `}</style>
        </div>
    )
        ;
};

export default Filters;
