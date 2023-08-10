import {FC, PropsWithChildren, useEffect} from "react";
import Header from "@/src/layout/header/Header";
import {useAppSelector} from "@/src/redux/hooks";
import Preloader from "@/src/components/preloader/Preloader";
import ErrorComponent from "@/src/components/error/ErrorComponent";
import useErrorHandling from "@/src/hooks/useErrorHandling";


const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    const isLoading = useAppSelector(state => state.loading.isLoading);
    const isError = useAppSelector((state) => state.loading.isError);

    useErrorHandling(isError);

    return (
        <>
            {isLoading && <Preloader/>}
            <div className={`container`}>
                <Header/>
                <main>
                    {children}
                </main>

            </div>
            {isError && <ErrorComponent/>}
        </>
    )
}

export default Layout;