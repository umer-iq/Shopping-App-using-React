import React from 'react'
// import Header from './componenets/header';
import './default.scss'
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import {Route,Routes} from 'react-router-dom'
// import Footer from './componenets/Footer';
import Login from './pages/Login';
import HomepageLayout from './layouts/Homepagelayout';
import Mainlayout from './layouts/Mainlayout';
import { Outlet } from 'react-router-dom';
import Footer from './componenets/Footer';
import Recovery from './pages/Recovery';

const AppLayout = ({ Homepage }) => Homepage ? (
<>
<HomepageLayout />

<Outlet />
<Footer/>

</>
) : null;
const MainLayout = ({ Registration }) => Registration ? (
<>
<Mainlayout />

<Outlet />


</>
) : null;
function App() {
return (
<div className='App' >

<div className='main'>

<Routes>
<Route element={<AppLayout Homepage={Homepage} />}><Route exact path="/" element={<Homepage/>}/></Route>
<Route element={<MainLayout Registration={Registration} />}><Route exact path="/registration" element={<Registration/>}/></Route>
<Route element={<MainLayout Registration={Registration} />}><Route exact path="/login" element={<Login/>}/></Route>
<Route element={<MainLayout Registration={Registration} />}><Route exact path="/recovery" element={<Recovery/>}/></Route>
</Routes>
</div>
</div>
);
}

export default App;
