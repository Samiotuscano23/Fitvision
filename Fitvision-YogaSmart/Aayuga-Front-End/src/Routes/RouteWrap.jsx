import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading.jsx';
import Profile from '../Components/Profile.jsx';
const ChatBot = lazy(() => import('../pages/ChatBot.jsx'));
const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const Pose = lazy(() => import('../pages/Pose.jsx'));
const Login = lazy(() => import('../Components/Login.jsx'));
const Signup = lazy(() => import('../Components/Signup.jsx'));
const SelectPose = lazy(() => import('../Components/SelectPose.jsx'));

const RouteWrap = () => {
   return (
      <div className=''>
         <Suspense fallback={<Loading />}>
            <Router>
               <Navbar />
               <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/Pose' element={<Pose />} />
                  <Route path='/SelectPose' element={<SelectPose />} />
                  <Route path='/ChatBot' element={<ChatBot />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/profile' element={<Profile />} />
               </Routes>
            </Router>
         </Suspense>
      </div>
   )
}

export default RouteWrap
