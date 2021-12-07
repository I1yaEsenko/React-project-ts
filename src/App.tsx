import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div>
      <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        <Profile/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}



export default App;
