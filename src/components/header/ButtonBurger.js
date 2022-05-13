import React from 'react';

const ButtonBurger = ({menuInit}) => {
    return (
        <button type="button"
                className="menu__icon icon-menu block  lg:hidden relative z-20 before:bg-neutral-900 after:bg-neutral-900 dark:before:bg-gray-200 dark:after:bg-gray-200"
                onClick={menuInit}>
                            <span
                                className="bg-neutral-900 before:bg-neutral-900 after:flex after:bg-blue-300 dark:bg-gray-200 "></span>

        </button>
    );
};

export default ButtonBurger;
