import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/src/redux/store";
import Layout from "@/src/layout/Layout";
import useTheme from "@/src/hooks/useTheme";


export default function App({Component, pageProps}: AppProps) {
    const {theme, setTheme} = useTheme();
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
