import React from 'react';
import h from './Header.module.css';
import img from './img/logo.png';
import {ArrayMenu} from "../../index";
import {LinkHeader} from "../Sidebar/Link/LinkHeader";

type HeaderPropsType = {
  mainMenu: Array<ArrayMenu>
}

const Header = (props:HeaderPropsType) => {
  let newMainMenuElement = props.mainMenu
    .map(hm => <LinkHeader title={hm.linkTitle} pathPage={hm.way} class={hm.classTag} tag={hm.iconTag} color={hm.colorTag}/>)
  return (
    <header className={h.header}>
      <div className={h.wrapper}>
      <div className={h.logo}><img src={img} alt=""/></div>
      <div className={h.menu}>
        <div className={h.input}><input type='text' placeholder="Start typing to search.."/></div>
        <ul className={h.itemsMenu}>
          {newMainMenuElement}
        </ul>
      </div>
      <div className={h.settings}>
        <ul className={h.itemsSettings}>
          <li className={h.itemSettings}><a href="#">Notifications</a></li>
          <li className={h.itemSettings}><a href="#">Contacts</a></li>
          <li className={h.itemSettings}><a href="#">Settings</a></li>
          <li className={h.itemSettings}><a href="#">Account</a></li>
        </ul>
      </div>
      </div>
    </header>
  );
}

export default Header;

