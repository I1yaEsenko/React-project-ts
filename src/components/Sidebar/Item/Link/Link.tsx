import React from "react";
import ln from './Link.module.css';

const Link = () => {
  return (
        <li className={ln.item__item}>
          <span className={ln.item__icon}></span>
          <a className={ln.item__link} href='#'>Email Box</a>
        </li>
  );
}

export default Link;