import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Badges from "./components/Sidebar/Feeds/Feeds.links/Badges/Badges";
import Contacts from "./components/Contacts/Contacts";
import News from "./components/Sidebar/Feeds/Feeds.links/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Explore from "./components/Sidebar/Feeds/Feeds.links/Explore/Explore";
import Popular from "./components/Sidebar/Feeds/Feeds.links/Popular/Popular";
import Author from "./components/Sidebar/Feeds/Feeds.links/Author/Author";
import Settings from "./components/Sidebar/Account/Account.links/Settings/Settings";
import Chat from "./components/Sidebar/Account/Account.links/Chat/Chat";
import Analytics from "./components/Sidebar/Account/Account.links/Analytics/Analytics";
import {ArrayMenu} from "./index";
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
  linksFeed: Array<ArrayMenu>
  linksAccount: Array<ArrayMenu>
  mainMenu: Array<ArrayMenu>
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header mainMenu={props.mainMenu}/>
        <Sidebar linksFeed={props.linksFeed} linksAccount={props.linksAccount}/>
        <div className='container'>
          <Routes>
            <Route path='/news' element={<News/>}/>
            <Route path='/badges' element={<Badges/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/author' element={<Author/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
          </Routes>
        </div>
        <Contacts/>
      </div>
    </BrowserRouter>

  );
}

export default App;
