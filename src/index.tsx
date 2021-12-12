import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type ArrayMenu = {
  linkTitle: string
  way: string
  classTag: string
  iconTag: string
  colorTag: string
}

const linksFeeds: Array<ArrayMenu> = [
  {linkTitle: 'Newsfeed', way: '/News', classTag:'iconLeft',  iconTag: 'icon-tv', colorTag: 'tv'},
  {linkTitle: 'Badges', way: '/Badges', classTag:'iconLeft', iconTag: 'icon-badge', colorTag: 'badge'},
  {linkTitle: 'Explore Stories', way: '/Explore', classTag:'iconLeft', iconTag: 'icon-globe', colorTag: 'earth'},
  {linkTitle: 'Popular Groups', way: '/Popular', classTag:'iconLeft', iconTag: 'icon-flash-outline', colorTag: 'light'},
  {linkTitle: 'Author Profile', way: '/Author', classTag:'iconLeft', iconTag: 'icon-user', colorTag: 'man'},
]

const linksAccount: Array<ArrayMenu> = [
  {linkTitle: 'Settings', way: '/Settings', classTag:'iconLeft', iconTag: 'icon-settings', colorTag: 'none'},
  {linkTitle: 'Analytics', way: '/Analytics', classTag:'iconLeft', iconTag: 'icon-pie-chart', colorTag: 'none'},
  {linkTitle: 'Chat', way: '/Chat', classTag:'iconLeft', iconTag: 'icon-chat_bubble_outline', colorTag: 'none'},
]

const mainMenu: Array<ArrayMenu> = [
  {linkTitle: '', way: '/Home', classTag:'iconHeaderMenu', iconTag: 'icon-home', colorTag: 'mainMenuGray'},
  {linkTitle: '', way: '/Stories', classTag:'iconHeaderMenu', iconTag: 'icon-flash-outline', colorTag: 'mainMenuGray'},
  {linkTitle: '', way: '/Video', classTag:'iconHeaderMenu', iconTag: 'icon-video', colorTag: 'mainMenuGray'},
  {linkTitle: '', way: '/Group', classTag:'iconHeaderMenu', iconTag: 'icon-user', colorTag: 'mainMenuGray'},
  {linkTitle: '', way: '/Shopping', classTag:'iconHeaderMenu', iconTag: 'icon-shopping-bag', colorTag: 'mainMenuGray'},
]
ReactDOM.render(
  <React.StrictMode>
    <App linksFeed={linksFeeds} linksAccount={linksAccount} mainMenu={mainMenu}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
