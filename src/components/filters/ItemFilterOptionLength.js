import React, {useMemo} from 'react';
import {useSelector} from "react-redux";

const ItemFilterOptionLength = ({itemFilter}) => {
    const checkedArr = useSelector(state => state.checked)
    const checkFilterLength = useMemo(() => {
        let objCheck = {}
        checkedArr.map(elem => elem.value).forEach(elem => {
            if (!objCheck[elem.split('-')[0]]) {
                objCheck[elem.split('-')[0]] = []
            }
            if (!objCheck[elem.split('-')[0]].includes(elem.split('-')[1])) {
                objCheck[elem.split('-')[0]].push(elem.split('-')[1])
            }
        })
        for (let key in objCheck) {
            if (Object.prototype.hasOwnProperty.call(objCheck, key)) {
                objCheck[key] = objCheck[key].length
            }
        }
        return objCheck
    }, [checkedArr])

    return (
        <div>
            <span>{checkFilterLength[itemFilter.id] > 0 &&
                <span
                    className={" checked-length px-1 text-4xs font-mono flex items-center justify-center rounded bg-gray-200 text-black pointer-events-none"}>
                <span>
               {checkFilterLength[itemFilter.id]}
           </span>
       </span>
            }
        </span>


            <style jsx>{`
              .alert-enter {
                opacity: 0;
                transform: scale(0.9);
              }

              .alert-enter-active {
                opacity: 1;
                transform: translateX(0);
                transition: opacity 300ms, transform 300ms;
              }

              .alert-exit {
                opacity: 1;
              }

              .alert-exit-active {
                opacity: 0;
                transform: scale(0.9);
                transition: opacity 300ms, transform 300ms;
              }

            `}</style>
        </div>
    );
};

export default ItemFilterOptionLength;
