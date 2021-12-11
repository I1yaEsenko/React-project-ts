import React from "react";
import it from './Account.module.css';
import Link from "../Link/Link";


type SidebarItemPropsType = {
  title: string
}

export type AccountMenu = {
  linkTitle: string
  way: string
  classTag: string
  colorTag: string
}

const linksAccount: Array<AccountMenu> = [
  {linkTitle: 'Settings', way: '/Settings', classTag: 'icon-settings', colorTag: 'none'},
  {linkTitle: 'Analytics', way: '/Analytics', classTag: 'icon-pie-chart', colorTag: 'none'},
  {linkTitle: 'Chat', way: '/Chat', classTag: 'icon-chat_bubble_outline', colorTag: 'none'},
]

let newLinksAccountElement = linksAccount
  .map(la => <Link title={la.linkTitle} pathPage={la.way} tag={la.classTag} color={la.colorTag}/>)

const Account = (props: SidebarItemPropsType) => {
  return (
    <div className={it.item}>
      <div className={it.title}>{props.title}</div>
      <ul className={it.menu}>
        {newLinksAccountElement}
      </ul>
    </div>
  );
}

export default Account;