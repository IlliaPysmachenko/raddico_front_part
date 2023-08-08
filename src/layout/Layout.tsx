import {FC, PropsWithChildren} from "react";
import Header from "@/src/layout/header/Header";
import {useAppSelector} from "@/src/redux/hooks";
import Preloader from "@/src/components/preloader/Preloader";


const Layout:FC<PropsWithChildren<unknown>> = ({children}) => {
    const isLoading = useAppSelector( state => state.loading.isLoading);


    return (
        <>
            {isLoading && <Preloader />}
            <div className={`container`}>
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;