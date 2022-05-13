import React from 'react';
import {useDispatch} from "react-redux";

const ClearFilter = () => {
    const dispatch = useDispatch()

    const clearFilter = () => {
        dispatch({type: "DELETE_CHECK", payload: []})
        dispatch({type: "REMOVE_TEXT_SEARCH", payload: ''})
    }

    return (
        <div className="flex items-center justify-center">
            <button className="p-3 bg-gray-800 text-white rounded-md"
                    onClick={clearFilter}>
                CLEAR FILTER
            </button>
        </div>
    );
};

export default ClearFilter;
