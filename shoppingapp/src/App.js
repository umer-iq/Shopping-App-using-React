import React from 'react'
import Header from './componenets/header';
import './default.scss'
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import {Route,Routes} from 'react-router-dom'
import Footer from './componenets/Footer';

function App() {
  return (
    <div className='App' >
    <Header/>
    <div className='main'>
<Routes>
     <Route  path='/' element={<Homepage/>}/>
     <Route path='/registration' element={<Registration/>}/>
     
</Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
