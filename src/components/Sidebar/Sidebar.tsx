import React from 'react';
import sb from './Sidebar.module.css';
import Feeds from "./Feeds/Feeds";
import Account from "./Account/Account";


export type ArrayMenu = {
  linkTitle: string
  way: string
  classTag:string
  colorTag:string
}

type SidebarPropsType = {
  linksFeed: Array<ArrayMenu>
}

const Sidebar = (props: SidebarPropsType) => {
  return (
    <aside className={sb.sidebar}>
      <Feeds title={'New Feeds'} linksFeed={props.linksFeed}/>
      {/*<Pages title={'More Pages'}/>*/}
      <Account title={'Account'} />
    </aside>
  );
}

export default Sidebar;