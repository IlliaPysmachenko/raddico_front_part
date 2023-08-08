import style from './Preloader.module.scss'
const Preloader = () => {
    return(
        <div className={style.loaderBlock}>
            <div className={style.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader;