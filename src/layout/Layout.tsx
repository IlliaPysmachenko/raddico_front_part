import {FC, PropsWithChildren} from "react";
import Header from "@/src/layout/header/Header";


const Layout:FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div className={`container`}>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;