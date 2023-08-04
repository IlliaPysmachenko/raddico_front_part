import style from './HomePage.module.scss';
import SearchPanel from "@/src/screens/home/searchPanelBlock/SearchPanel";
import StudiesBlock from "@/src/screens/home/studiesBlock/StudiesBlock";
import {useEffect} from "react";
import {searchApi} from "@/src/api/api";
const HomePage = () => {

    // useEffect(() => {
    //     searchApi.getValues();
    // },[])

    return (
        <>
            <SearchPanel/>
            <StudiesBlock/>
        </>
    )
}

export default HomePage;






