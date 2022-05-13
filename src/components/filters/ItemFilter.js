import React, {useEffect, useMemo, useState} from 'react';
import IconPlus from "../icons/Plus";
import ItemFilterOption from "./ItemFilterOption";
import ItemFilterOptionLength from "./ItemFilterOptionLength";
import {useSelector} from "react-redux";



const ItemFilter = ({itemFilter}) => {
    const [show, setShow] = useState(false)
    const showOpenAndRotate = () => setShow(!show)

    return (
        <div className={'border-b-neutral-400-900 border-b-2'}>
            <button
                className="click-rotate w-full flex items-center justify-between hover:bg-gray-300  rounded-sm dark:hover:bg-neutral-600"
                onClick={showOpenAndRotate}>
                <span className="flex items-center">
                    <span
                        className="font-600 flex lg:text-xl py-2 pr-2 items-center relative text-s uppercase pointer-events-none text-black dark:text-white duration-300">
                    {itemFilter.id}
                </span>

                         <ItemFilterOptionLength itemFilter={itemFilter}/>

                </span>
                <div className={"btnRotate btn pointer-events-none mx-2 " + (show ? 'rotate' : '')}>
                    <IconPlus show={show}/>
                </div>
            </button>
            <div className={'spoiler_body' + ' ' + (show ? 'visible' : '')}>
                {itemFilter.options.map((option, index) =>
                    <ItemFilterOption key={index} option={option} index={index} itemFilter={itemFilter}/>
                )}
            </div>

            <style jsx>{`
              /* полоса прокрутки (скроллбар) */
              ::-webkit-scrollbar {
                width: 5px; /* ширина для вертикального скролла */
                background-color: #c4c4c4;
              }

              /* ползунок скроллбара */
              ::-webkit-scrollbar-thumb {
                background-color: #2d2d2d;
              }

              ::-webkit-scrollbar-thumb:hover {
                background-color: #030303;
              }

              /* Стрелки */
              ::-webkit-scrollbar-button:vertical:start:decrement {
                width: 0;
                height: 0;
                background: transparent;
              }

              ::-webkit-scrollbar-button:vertical:end:increment {
                background: transparent;
                width: 0;
                height: 0;
              }

              ::-webkit-scrollbar-button:horizontal:start:decrement {
                background: transparent;
                width: 0;
                height: 0;
              }

              ::-webkit-scrollbar-button:horizontal:end:increment {
                background: transparent;
                width: 0;
                height: 0;
              }

              .btnRotate {
                border: none;
                transition: 0.3s;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .rotate {
                transition: 0.3s;
                transform: rotate(45deg);
                transform-origin: center;
              }

              .spoiler_body {
                height: 0;
                transition: all 0.5s;
                overflow-y: scroll;
              }

              .visible {
                height: 150px;
                transition: all 0.5s;
              }

            `}</style>
        </div>
    );
};

export default ItemFilter;
