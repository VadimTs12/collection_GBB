import React, {useEffect, useState} from 'react';
import ThemeWhite from "../icons/ThemeWhite";
import ThemeDark from "../icons/ThemeDark";
import { useTheme } from 'next-themes'

const ButtonTheme = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
        <button
            className="p-2 text-slate-600 hover:text-slate-800
                       dark:text-slate-300 dark:hover:text-slate-100
                       focus-visible:ring-2 focus-visible:ring-green-400
                       rounded-lg duration-300 "
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ?  <ThemeDark/> :  <ThemeWhite/>}
        </button>

    );
};

export default ButtonTheme;
