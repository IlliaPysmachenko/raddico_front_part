import React, { useState } from 'react';
import ColorPicker from '@/src/components/colorPicker/ColorPicker';
import style from './ConfigurationPage.module.scss';
import AeTitlesTab from "@/src/screens/configurationPage/aeTitlesTab/AeTitlesTab";

const sidebarTabs = [
  {
    id: 'tab1',
    name: 'AE Titles',
  },
  {
    id: 'tab2',
    name: 'Configuration',
  },
];

function ConfigurationPage() {
  const [activeTab, setActiveTab] = useState('tab1');

  const sidebar = sidebarTabs.map((item) => {
    const setActiveTabHandler = () => {
      setActiveTab(item.id);
    };
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className={`${style.item_container} ${item.id === activeTab ? style.activeTab : ''}`}
        onClick={setActiveTabHandler}
      >
        {item.name}
      </div>
    );
  });

  return (
    <div className={style.configurationPage_container}>
      <div className={style.sidebar_container}>
        {sidebar}
      </div>
      <div className={style.contentTabs_container}>
        {activeTab === 'tab2' && <ColorPicker />}
        {activeTab === 'tab1' && <AeTitlesTab />}
      </div>
    </div>
  );
}

export default ConfigurationPage;
