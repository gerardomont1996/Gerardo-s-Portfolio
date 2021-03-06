import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Section/>
    </div>
  );
}

export default App;
