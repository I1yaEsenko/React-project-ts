import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div>
      <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        {/*<Profile/>*/}
        <div className='container'>
          <Dialogs/>
        </div>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}


export default App;
