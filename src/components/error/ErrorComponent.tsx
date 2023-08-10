'use client'
import style from './ErrorComponent.module.scss'
import {useAppDispatch} from "@/src/redux/hooks";
import {closeError} from "@/src/redux/loading/loading";
import {useEffect} from "react";

const ErrorComponent = () => {
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         dispatch(closeError());
    //     }, 3000);
    //
    //     return () => clearTimeout(timer); // Очистка таймера при размонтировании
    // }, [dispatch]);

    return (
        <div className={style.errorContainer}>

            <div className={style.errorBlock}>
                <h3 className={style.errorTitle}>Something went wrong...</h3>

                <p>Please try to reload the page</p>
            </div>

        </div>
    )
}

export default ErrorComponent;