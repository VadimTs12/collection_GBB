import React from 'react';
import {useDispatch} from "react-redux";

const ItemFilterOption = ({option, index, itemFilter}) => {
    const dispatch = useDispatch()

    const handleCheck = (event) => {
        if (event.target.checked) {
            dispatch({type: "ADD_CHECK", payload: {value:event.target.value, checked: event.target.checked}})
        } else {
            dispatch({type: "REMOVE_CHECK",  payload: {value:event.target.value, checked: event.target.checked}})
        }
    }
        return (
            <div className="form-check flex  items-center galleryinput">
                <input
                    className="form-check-input h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 accent-rose-900 duration-700 checked:bg-blue-500"
                    type="checkbox"
                    value={itemFilter.id + '-' + option.value}
                    onChange={handleCheck}
                    id={itemFilter.id + '-' + option.value}/>
                <label
                    className="form-check-label ml-2 uppercase font-mono text-xs pt-2 pb-1.5 opacity-80 w-full cursor-pointer h-full"
                    htmlFor={itemFilter.id + '-' + option.value}>
                    {option.value} ({option.count})
                </label>
            </div>
        );
    };

    export default ItemFilterOption;
