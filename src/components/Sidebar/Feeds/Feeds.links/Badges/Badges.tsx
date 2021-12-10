import React from 'react';
import p from './Badges.module.css';

const Badges = () => {
  return (
    <div className={p.profile}>
      <div className={p.profile__img}>img</div>
      <div className={p.profile__avatar}>ava</div>
      <div className={p.profile__items}>My post
        <div className={p.profile__item}>post 1</div>
        <div className={p.profile__item}>post 2</div>
      </div>
    </div>
  );
}

export default Badges;