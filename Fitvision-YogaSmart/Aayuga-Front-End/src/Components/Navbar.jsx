import React, { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useScreenSize from '../hooks/useScreenSize';
import logo from '../utils/logo.png';
const Navbar = () => {
   const { state, dispatch } = useAuth();
   const location = useLocation();
   const navigate = useNavigate();
   const [isHomePage, setIsHomePage] = useState(true);
   const [isOpen, setIsOpen] = useState(false);
   const screenSize = useScreenSize();

   useEffect(() => {
      if (screenSize.width > 768) {
         setIsOpen(false);
      }
   }, [screenSize.width]);

   useEffect(() => {
      setIsHomePage(location.pathname === '/');
   }, [location]);

   const openNav = () => setIsOpen(true);
   const closeNav = () => setIsOpen(false);

   const handleHome = () => navigate('/');
   const handleLogin = () => {
      navigate('/login');
      closeNav();
   }
   const handleProfile = () => {
      navigate('/profile')
      closeNav();
   };

   return (
      <>
         <div id="navbar" className='fixed top-0 w-full flex content-between justify-between items-center bg-[#22c9ef] z-20 lg:p-1 p-2'>
            <div className="flex items-center">
               <img src={logo} alt="Fitvision" className='mx-[1vw] lg:h-[45px] lg:w-[45px] h-[40px] h-[40px]' />
               <button onClick={handleHome} className='text-3xl font-black'>Fitvision</button>
            </div>
            {screenSize.width > 1200 ? (
               <div className='flex items-center'>
                  <ul className='flex items-center mr-4'>
                     {isHomePage && <>
                        <button className='mx-4 text-xl font-semibold' onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button>
                        <button className='mx-4 text-xl font-semibold' onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
                        <button className='mx-4 text-xl font-semibold' onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</button>
                        <button className='mx-4 text-xl font-semibold' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button>
                     </>}
                     {
                        (location.pathname === '/profile' || location.pathname === '/ChatBot' || location.pathname === '/Pose') ? <button className='mx-4 text-xl font-semibold' onClick={() => {
                           navigate('/');
                        }}>Home</button> : <></>
                     }
                    
                  </ul>
               </div>
            ) : (
               <button className='list-button' onClick={openNav}><div className='text-xl mr-4'>&#9776;</div></button>
            )}
         </div>
         <Offcanvas show={isOpen} onHide={closeNav} className='bg-gradient-to-t from-[#72ddf5]'>
            <Offcanvas.Header className='bg-[#22c9ef] w-auto p-3 rounded-xl m-2'>
               <Offcanvas.Title className=''>Menu</Offcanvas.Title>
               <button className=" text-[20px] bg-red-700 w-[30px] rounded-lg" onClick={closeNav}>&times;</button>
            </Offcanvas.Header>
            <ul className='flex-col items-center mr-12 py-2'>
               {isHomePage && <>
                  <li><button className='mx-4 my-1 text-xl font-semibold w-full bg-[#2262ef] rounded-lg' onClick={() => {
                     document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                     closeNav();
                  }}>Home</button></li>
                  <li><button className='mx-4 my-1 text-xl font-semibold w-full bg-[#2262ef] rounded-lg' onClick={() => {
                     document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                     closeNav();
                  }}>About</button></li>
                  <li><button className='mx-4 my-1 text-xl font-semibold w-full bg-[#2262ef] rounded-lg' onClick={() => {
                     document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                     closeNav();
                  }}>Services</button></li>
                  <li><button className='mx-4 my-1 text-xl font-semibold w-full bg-[#2262ef] rounded-lg' onClick={() => {
                     document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                     closeNav();
                  }}>Contact</button></li>
               </>}
               {(location.pathname === '/profile' || location.pathname === '/Pose') ? <button className='mx-4 my-1 text-xl font-semibold w-full bg-[#2262ef] rounded-lg' onClick={() => {
                  navigate('/')
                  closeNav();
               }}>Home</button> : <></>}
            </ul>
         </Offcanvas>
      </>
   );
};

export default Navbar;
