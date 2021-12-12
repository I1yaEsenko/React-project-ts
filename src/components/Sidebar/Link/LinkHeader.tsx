import ln from "./Link.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type LinkPropsType = {
  title: string
  pathPage: string
  class: string
  tag: string
  color: string
}
export const LinkHeader = (props: LinkPropsType) => {
  return (
    <li className={ln.item}>
      <NavLink className={ln.link} to={props.pathPage}>{props.title}
        <span className={`${props.class} ${props.color} ${props.tag}`}></span>
      </NavLink>
    </li>
  )
}