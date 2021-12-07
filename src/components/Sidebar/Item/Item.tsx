import React from "react";
import it from './Item.module.css';
import Link from "./Link/Link";

const Item = () => {
  return (
    <div className={it.item}>
    <div className={it.item__title}>More Pages</div>
  <ul className={it.item__menu}>
    <Link/>
    <Link/>
    <Link/>
  </ul>
    </div>
  );
}

export default Item;