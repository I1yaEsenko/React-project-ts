import React from "react";
import ln from './Link.module.css';
import {NavLink} from "react-router-dom";
import {LinkPropsType} from "./LinkHeader";

const Link = (props: LinkPropsType) => {

  return (
    <li className={ln.item}>
      <span className={`${props.class} ${props.color} ${props.tag}`}></span>
      <NavLink className={ln.link} to={props.pathPage}>{props.title}</NavLink>
    </li>
  );
}

export default Link;

