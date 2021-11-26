import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
  console.log("App rendering");
  return (
    <div>
      <AppTitle title={"This is TS App"}/>
      <Rating value={1}/>
      <Accordion title={"Меню правое"} collapsed={true}/>
      <Accordion title={"Меню левое"} collapsed={false}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}

type AppTitlePropsType = {
  title: string
}

function AppTitle(props: AppTitlePropsType){
  console.log("AppTitle rendering");
  return <h1>{props.title}</h1>
}


export default App;
