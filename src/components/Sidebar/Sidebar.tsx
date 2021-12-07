import React from 'react';
import sb from './Sidebar.module.css';
import Item from "./Item/Item";


const Sidebar = () => {
  return (
    <aside className={sb.sidebar}>
      <Item title={'New Feeds'}/>
      <Item title={'More Pages'}/>
      <Item title={'Account'}/>
    </aside>
  );
}

export default Sidebar;