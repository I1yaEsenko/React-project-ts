import React from 'react';
import sb from './Sidebar.module.css';
import Item from "./Item/Item";

const Sidebar = () => {
  return (
    <aside className={sb.sidebar}>
        <Item/>
        <Item/>
        <Item/>
    </aside>
  );
}

export default Sidebar;