import React, { useState } from 'react';
import QnA from '../Components/QnA';
import History from '../Components/History';

const ChatBot = () => {
  const [isChange, setIsChange] = useState(false);
  return (
      <div className='flex lg:flex-row flex-col lg:h-[100vh] w-full xl:pt-8 pt-12 justify-center items-center bg-gradient-to-t from-[#72ddf5]'>
        <QnA isChange={isChange} setIsChange={setIsChange} />
        <History isChange={isChange} />
      </div>
  )
}

export default ChatBot
