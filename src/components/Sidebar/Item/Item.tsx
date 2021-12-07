import React from "react";
import it from './Item.module.css';
import Link from "./Link/Link";


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
]

const linksMorePages: Array<ArrayMenu> = [
  {id:0, linkTitle:'Email Box'},
  {id:1, linkTitle:'Latest Event'},
  {id:2, linkTitle:'Live Stream'},
]

const linksAccount: Array<ArrayMenu> = [
  {id:0, linkTitle:'Settings'},
  {id:1, linkTitle:'Analytics'},
  {id:2, linkTitle:'Chat'},
]

const Item = (props:SidebarItemPropsType) => {
  return (
    <div className={it.item}>
    <div className={it.title}>{props.title}</div>
    <Link  links={linksNewFeeds}/>
    </div>
  );
}

export default Item;