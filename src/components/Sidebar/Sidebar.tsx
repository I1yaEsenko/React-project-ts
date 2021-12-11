import React from 'react';
import sb from './Sidebar.module.css';
import Pages from "./Item/Pages";
import Feeds from "./Feeds/Feeds";
import Account from "./Account/Account";

const Sidebar = () => {
  return (

    <aside className={sb.sidebar}>
      <Feeds title={'New Feeds'}/>
      {/*<Pages title={'More Pages'}/>*/}
      <Account title={'Account'}/>
    </aside>
  );
}

export default Sidebar;