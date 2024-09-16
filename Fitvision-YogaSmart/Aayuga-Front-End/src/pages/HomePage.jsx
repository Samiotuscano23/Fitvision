import React, { useEffect } from 'react';
import About from '../Components/About.jsx';
import Home from '../Components/Home.jsx';
import Services from '../Components/Services.jsx';
import Webgi3D from '../Components/Webgi3D.jsx';
import Contact from '../Components/Contact.jsx';
import useScreenSize from '../hooks/useScreenSize.jsx'
const HomePage = () => {
  const screenSize = useScreenSize();
  return (
    <>
      {screenSize.width > 600 && window.screen.width>600 && <Webgi3D /> }
      <Home />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default HomePage