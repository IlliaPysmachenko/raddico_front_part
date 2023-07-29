import style from './ColorTheme.module.scss'
import Image from "next/image";

import Sun from '@/public/sun-svgrepo-com.svg'
import Moon from '@/public/moon-svgrepo-com.svg'



const ColorTheme = () => {
    return (
        <div className={style.colorThemeToggle_container}>
            <input type="checkbox" id="darkmode-toggle"/>
            <label htmlFor="darkmode-toggle">
                <img src={Sun}/>
                <Image className={style.moon} src={Moon} alt={'light mode'} width={16} height={16}/>
            </label>
        </div>
    )
}

export default ColorTheme;