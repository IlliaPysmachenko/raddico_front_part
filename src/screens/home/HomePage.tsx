import React from 'react';
import SearchPanel from '@/src/screens/home/searchPanelBlock/SearchPanel';
import StudiesBlock from '@/src/screens/home/studiesBlock/StudiesBlock';
import { useAppSelector } from '@/src/redux/hooks';
// import style from './HomePage.module.scss';

function HomePage() {
  const { studies } = useAppSelector((state) => state.study);
  return (
    <>
      <SearchPanel />
      {studies && <StudiesBlock />}
    </>
  );
}

export default HomePage;
