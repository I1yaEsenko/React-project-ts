import React from "react";
import it from './Feeds.module.css';
import Link from "../Link/Link";

type SidebarItemPropsType = {
  title: string
}

export type ArrayMenu = {
  linkTitle: string
  way: string
  classTag:string
  colorTag:string
}

const linksFeeds: Array<ArrayMenu> = [
  {linkTitle: 'Newsfeed', way: '/News', classTag:'icon-tv', colorTag:'tv'},
  {linkTitle: 'Badges', way: '/Badges', classTag:'icon-badge', colorTag:'badge'},
  {linkTitle: 'Explore Stories', way: '/Explore', classTag:'icon-globe', colorTag:'earth'},
  {linkTitle: 'Popular Groups', way: '/Popular', classTag:'icon-flash-outline', colorTag:'light'},
  {linkTitle: 'Author Profile', way: '/Author', classTag:'icon-user', colorTag:'man'},
]

let newLinksElement = linksFeeds
  .map( lf => <Link title={lf.linkTitle} pathPage={lf.way} tag={lf.classTag} color={lf.colorTag}/>)


const Feeds = (props: SidebarItemPropsType) => {
  return (
    <div className={it.item}>
      <div className={it.title}>{props.title}</div>
      <ul className={it.menu}>
        {newLinksElement}
      </ul>
    </div>

  );
}

export default Feeds;