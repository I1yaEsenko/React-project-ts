import React from 'react';
import h from './Header.module.css';
import img from './img/logo.png';

// type HeaderPropsType = {
//   title: string
// }

const Header = () => {
  return (
    <header className={h.header}>
      <div className={h.wrapper}>
      <div className={h.logo}><img src={img} alt=""/></div> 
      <div className={h.input}><input placeholder="Start typing to search"/></div>
      <div >
        <ul className={h.menu}>
          <li className={h.col1}><a href="#">Home</a></li>
          <li className={h.col2}><a href="#">Stories</a></li>
          <li className={h.col3}><a href="#">Video</a></li>
          <li className={h.col4}><a href="#">Group</a></li>
          <li className={h.col5}><a href="#">Shop</a></li>
        </ul>
      </div>
      <div >
        <ul className={h.settings}>
          <li className={h.col1}><a href="#">Notifications</a></li>
          <li className={h.col2}><a href="#">Contacts</a></li>
          <li className={h.col3}><a href="#">Settings</a></li>
          <li className={h.col4}><a href="#">Account</a></li>
        </ul>
      </div>
      </div>
    </header>
  );
}

export default Header;

