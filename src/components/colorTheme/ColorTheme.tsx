"use client"
import style from './ColorTheme.module.scss'
import {Sun, Moon} from '@/src/components/icons'
import useTheme from "@/src/hooks/useTheme";
import {useRef} from "react";




const ColorTheme = () => {
    const ref = useRef<HTMLInputElement>(null);
    const {theme, setTheme} = useTheme();
    const toggleThemeHandler = (ref:any) => {

        if(ref.current.checked) {
            setTheme('dark')
        } else {
            setTheme('light');
        }

    }
    return (
        <div className={style.colorThemeToggle_container}>
            <input ref={ref} onClick={() => { toggleThemeHandler(ref) }} defaultChecked={ theme ==='dark' ? true : false } type="checkbox" id="darkmode-toggle"/>
            <label htmlFor="darkmode-toggle">
                <Sun className={style.sun}/>
                <Moon className={style.moon}/>
            </label>
        </div>
    )
}

export default ColorTheme;