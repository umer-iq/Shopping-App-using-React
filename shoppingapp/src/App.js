import React from 'react'
import Header from './componenets/header';
import './default.scss'
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className='App' >
    <Header/>
    <div className='main'>
     <Homepage/>
    </div>
    </div>
  );
}

export default App;
