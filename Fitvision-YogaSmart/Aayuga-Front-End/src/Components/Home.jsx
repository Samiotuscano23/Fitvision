import React from 'react';
import logo from '../utils/logo-light.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useScreenSize from '../hooks/useScreenSize';
function Home() {
  const screenSize = useScreenSize();
  useGSAP(() => {
    gsap.to('#home-left', {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: '#home',
        start: 'top -10%',
        end: 'bottom 30% ',
        scrub: 2,
      }
    })
  }, []);

  return (
    <div id="home" className="flex sm:flex-row flex-col h-screen w-auto items-center justify-center bg-gradient-to-t from-[#72ddf5]">
      <div id="home-left" className='lg:mx-24 md-mx-18 mx-10 text-left'>
        <h1 className="text-7xl font-bold  my-2">Fitvision</h1>
        <p className="text-2xl font-semibold mb-2">Your Personal <span className='font-extrabold text-[#2262ef]'>YOGA</span> Trainer</p>
        <p className='text-sm'><span className='font-semibold text-[#2262ef]'>Personal</span> Diet Planner <br /><span className='font-semibold text-[#2262ef]'>Personal</span> Health Advisor</p>
      </div>
      {/* {(screenSize.width > 600 && )} */}
      <img id="home-flower" src={logo} className='lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] sm:m-0 m-4 opacity-60 sm:opacity-80' />
    </div>
  );
}

export default Home;