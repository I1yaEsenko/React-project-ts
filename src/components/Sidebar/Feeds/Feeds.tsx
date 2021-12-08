import React from "react";
import it from './Feeds.module.css';
import Links from "./Feeds.links/Links";


type SidebarItemPropsType = {
  title: string
}

export type ArrayMenu = {
  id:number
  linkTitle: string
}

const linksNewFeeds: Array<ArrayMenu> = [
  {id:0, linkTitle:'NewsFeed'},
  {id:1, linkTitle:'Badges'},
  {id:2, linkTitle:'Explore Stories'},
  {id:3, linkTitle:'Popular Groups'},
  {id:4, linkTitle:'Author Profile'},
]

const Feeds = (props:SidebarItemPropsType) => {
  return (
    <div className={it.item}>
    <div className={it.title}>{props.title}</div>
    <Links  links={linksNewFeeds}/>
    </div>
  );
}

export default Feeds;