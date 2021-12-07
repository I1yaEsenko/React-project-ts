import React from "react";
import ln from './Link.module.css';
import {ArrayMenu} from "../Item";
import it from "../Item.module.css";

type SidebarLinkPropsType = {
  links: Array<ArrayMenu>
}

const Link = (props: SidebarLinkPropsType) => {
  return (
    <ul className={it.menu}>
      <li className={ln.item}>
        <span className={ln.icon}></span>
        <a className={ln.link} href='#'>{props.links[0].linkTitle}</a>
      </li>
      <li className={ln.item}>
        <span className={ln.icon}></span>
        <a className={ln.link} href='#'>{props.links[1].linkTitle}</a>
      </li>
      <li className={ln.item}>
        <span className={ln.icon}></span>
        <a className={ln.link} href='#'>{props.links[2].linkTitle}</a>
      </li>
    </ul>
  );
}

export default Link;