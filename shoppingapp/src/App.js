import React from 'react'
import Header from './componenets/header';
import './default.scss'
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import {Route,Switch} from 'react-router-dom'
import Footer from './componenets/Footer';
import Login from './pages/Login';
import HomepageLayout from './layouts/Homepagelayout';
import Mainlayout from './layouts/Mainlayout';

function App() {
  return (
    <div className='App' >
    
    <div className='main'>

<Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )}
        />
     <Route path="/registration" render={() => (
          <Mainlayout>
            <Registration />
          </Mainlayout>
        )} />
     <Route path="/login"
          render={() => (
            <Mainlayout>
              <Login />
            </Mainlayout>
          )} />
     
</Switch>
    </div>
   
    </div>
  );
}

export default App;
