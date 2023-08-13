import React from 'react';
import SearchPanel from '@/src/screens/home/searchPanelBlock/SearchPanel';
import StudiesBlock from '@/src/screens/home/studiesBlock/StudiesBlock';
// import style from './HomePage.module.scss';

function HomePage() {
  return (
    <>
      <SearchPanel />
      <StudiesBlock />
    </>
  );
}

export default HomePage;
