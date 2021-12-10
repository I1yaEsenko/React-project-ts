import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Badges from "./components/Sidebar/Feeds/Feeds.links/Badges/Badges";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import News from "./components/Sidebar/Feeds/Feeds.links/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Explore from "./components/Sidebar/Feeds/Feeds.links/Explore/Explore";
import Popular from "./components/Sidebar/Feeds/Feeds.links/Popular/Popular";
import Author from "./components/Sidebar/Feeds/Feeds.links/Author/Author";

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        <div className='container'>
          <Routes>
            <Route path='/news' element={<News/>}/>
            <Route path='/badges' element={<Badges/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/author' element={<Author/>}/>
          </Routes>
        </div>
        <Contacts/>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}


export default App;
