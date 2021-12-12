import React from "react";
import it from './Account.module.css';
import Link from "../Link/Link";
import {ArrayMenu} from "../../../index";


type SidebarItemPropsType = {
  title: string
  linksAccount: Array<ArrayMenu>
}

const Account = (props: SidebarItemPropsType) => {

  let newLinksAccountElement = props.linksAccount
    .map(la => <Link title={la.linkTitle} pathPage={la.way} class={la.classTag} tag={la.iconTag} color={la.colorTag}/>)

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