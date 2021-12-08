import React from "react";
import it from './Pages.module.css';
import Link from "./Pages.Links/Link";


type SidebarItemPropsType = {
  title: string
}

export type ArrayMenu = {
  id: number
  linkTitle: string
}


const linksMorePages: Array<ArrayMenu> = [
  {id: 0, linkTitle: 'Email Box'},
  {id: 1, linkTitle: 'Latest Event'},
  {id: 2, linkTitle: 'Live Stream'},
]

const Pages = (props: SidebarItemPropsType) => {
  return (
    <div className={it.item}>
      <div className={it.title}>{props.title}</div>
      <Link links={linksMorePages}/>
    </div>
  );
}

export default Pages;