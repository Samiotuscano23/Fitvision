import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import useScreenSize from '../hooks/useScreenSize';
import leftImage from '../utils/about-left.jpg';
import logo from '../utils/logo.png';

function About() {
  const screenSize = useScreenSize();
  useGSAP(() => {
    gsap.to('#about-left', {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: '#about',
        start: 'bottom 90%',
        end: 'bottom 30% ',
        scrub: 2,
      }
    }),
      gsap.to('#about-right', {
        opacity: 0,
        x: 100,
        scrollTrigger: {
          trigger: '#about',
          start: 'bottom 90%',
          end: 'bottom 30% ',
          scrub: 2
        }
      })
  }, []);
  return (
    <div id="about" className="flex sm:flex-row flex-col h-screen w-auto items-center bg-[#72ddf5]">
      <img id="about-left" src={leftImage} className='rounded-lg drop-shadow-lg xl:mx-32 lg:mx-24 sm:mx-16 xl:w-[300px] lg:w-[260px] md:w-[200px] w-[150px]' />
      {
        (screenSize.width > 1200 ? <img id="about-flower" src={logo} className='m-12 h-[200px] w-[200px]' /> : <></>)
      }
      <div id="about-right" className='xl:mx-26 lg:mx-24 md:mx-20 sm:mx-16 mx-12 z-0 text-left container'>
        <h1 className="text-6xl font-bold my-2">About</h1>
        <p className="text-2xl font-semibold mt-4">What is <span className='font-bold text-[#2262ef]'>Fitvision</span> ?</p>
        <p className=''>Fitvision is platfrom which provides the AI based Personal Diet planner, Yoga Trainer and Health Advisor for 24x7.</p>
        <p className="text-2xl font-semibold mt-4">Why <span className='font-bold text-[#2262ef]'>Fitvision</span> is needed nowadays ?</p>
        <p className=''>Modern lifestyle trends of prolonged sitting, reduced exercise, and poor dietary choices lead to health issues, shortening lives and productivity. Ayurveda and yoga offer holistic health solutions, yet access is limited due to high costs. Lack of resources hinders hiring personal trainers and diet planners for convenient fitness routines.<br /> Here, where Fitvision Come to your help to solve this problem.</p>
      </div>
    </div>
  );
}

export default About;