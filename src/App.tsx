import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className='app-wrapper'>
        <Header/>
        <Sidebar/>
        <Profile/>
        <Footer/>
      </div>
    </div>
  );
}



export default App;
