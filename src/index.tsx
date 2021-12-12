import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ArrayMenu} from "./components/Sidebar/Sidebar";


const linksFeeds: Array<ArrayMenu> = [
  {linkTitle: 'Newsfeed', way: '/News', classTag:'icon-tv', colorTag:'tv'},
  {linkTitle: 'Badges', way: '/Badges', classTag:'icon-badge', colorTag:'badge'},
  {linkTitle: 'Explore Stories', way: '/Explore', classTag:'icon-globe', colorTag:'earth'},
  {linkTitle: 'Popular Groups', way: '/Popular', classTag:'icon-flash-outline', colorTag:'light'},
  {linkTitle: 'Author Profile', way: '/Author', classTag:'icon-user', colorTag:'man'},
]

ReactDOM.render(
  <React.StrictMode>
    <App linksFeed={linksFeeds}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
