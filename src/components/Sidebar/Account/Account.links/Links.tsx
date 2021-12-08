import React from "react";
import ln from './Links.module.css';
import {ArrayMenu} from "../Account";

type SidebarLinkPropsType = {
  links: Array<ArrayMenu>
}

const Links = (props: SidebarLinkPropsType) => {
  return (
    <ul className={ln.menu}>
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

export default Links;