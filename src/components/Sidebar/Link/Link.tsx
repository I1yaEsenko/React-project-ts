import React from "react";
import ln from './Link.module.css';
import {NavLink} from "react-router-dom";

type LinkPropsType = {
  title: string
  pathPage: string
  tag: string
  color: string
}

const Link = (props: LinkPropsType) => {

  return (
    <li className={ln.item}>
      <span className={`${ln.icon} ${props.color} ${props.tag}`}></span>
      <NavLink className={ln.link} to={props.pathPage}>{props.title}</NavLink>
    </li>
  );
}

export default Link;