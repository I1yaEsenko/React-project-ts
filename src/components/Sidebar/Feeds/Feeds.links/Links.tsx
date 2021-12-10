import React from "react";
import ln from './Links.module.css';
import {ArrayMenu} from "../Feeds";
import {NavLink} from "react-router-dom";

type SidebarLinkPropsType = {
  links: Array<ArrayMenu>
}

const Links = (props: SidebarLinkPropsType) => {
  return (
    <ul className={ln.menu}>
      <li className={ln.item}>
        <span className={`${ln.icon} ${ln.tv} icon-tv`}></span>
        <NavLink className={ln.link} to='/News'>{props.links[0].linkTitle}</NavLink>
      </li>
      <li className={ln.item}>
        <span className={`${ln.icon} ${ln.badge} icon-badge`}></span>
        <NavLink className={ln.link} to='/Badges'>{props.links[1].linkTitle}</NavLink>
      </li>
      <li className={ln.item}>
        <span className={`${ln.icon} ${ln.earth} icon-globe`}></span>
        <NavLink className={ln.link} to='/Explore'>{props.links[2].linkTitle}</NavLink>
      </li>
      <li className={ln.item}>
        <span className={`${ln.icon} ${ln.light} icon-flash-outline`}></span>
        <NavLink className={ln.link} to='/Popular'>{props.links[3].linkTitle}</NavLink>
      </li>
      <li className={ln.item}>
        <span className={`${ln.icon} ${ln.man} icon-user`}></span>
        <NavLink className={ln.link} to='/Author'>{props.links[4].linkTitle}</NavLink>
      </li>
    </ul>
  );
}

export default Links;