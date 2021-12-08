import React from "react";
import it from './Account.module.css';
import Links from "./Account.links/Links";


type SidebarItemPropsType = {
  title: string
}

export type ArrayMenu = {
  id:number
  linkTitle: string
}

const linksAccount: Array<ArrayMenu> = [
  {id:0, linkTitle:'Settings'},
  {id:1, linkTitle:'Analytics'},
  {id:2, linkTitle:'Chat'},
]

const Account = (props:SidebarItemPropsType) => {
  return (
    <div className={it.item}>
    <div className={it.title}>{props.title}</div>
    <Links  links={linksAccount}/>
    </div>
  );
}

export default Account;