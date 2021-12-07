import React from 'react';
import f from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={f.footer}>
      <div className={f.footer__title}>
         PWL-company, 2021.
      </div>
      <div className={f.footer__text}>All rights reserved </div>
    </footer>
  );
}

export default Footer;

