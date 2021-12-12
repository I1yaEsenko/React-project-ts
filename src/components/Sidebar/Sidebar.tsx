import React from 'react';
import sb from './Sidebar.module.css';
import Feeds from "./Feeds/Feeds";
import Account from "./Account/Account";
import {ArrayMenu} from "../../index";

type SidebarPropsType = {
  linksFeed: Array<ArrayMenu>
  linksAccount: Array<ArrayMenu>
}

const Sidebar = (props: SidebarPropsType) => {
  return (
    <aside className={sb.sidebar}>
      <Feeds title={'New Feeds'} linksFeed={props.linksFeed}/>
      {/*<Pages title={'More Pages'}/>*/}
      <Account title={'Account'} linksAccount={props.linksAccount}/>
    </aside>
  );
}

export default Sidebar;