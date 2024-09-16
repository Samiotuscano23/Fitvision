import React from 'react'
import logo from '../utils/logo-light.png';
const Loading = () => {
   return (
      <div className='flex flex-col justify-center items-center h-screen w-full bg-gradient-to-t bg-gradient-to-t from-[#72ddf5]'>
         <img src={logo} className='h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]'></img>
         <p className='m-10 text-xl font-800'>Fitvision</p>
         <div className="w-[300px] h-[5px] bg-[#ddd] rounded-xl ">
            <span className='loader rounded-xl'></span>
         </div>
      </div>
   )
}

export default Loading;
