import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { URL } from '../URL';
const QnA = ({ isChange, setIsChange }) => {
   const [question, setQuestion] = useState("");
   const [reply, setReply] = useState("");

   const handleChat = async () => {
      try {
         const response = await toast.promise(axios.post(`${URL}/api/chat`, {
            prompt: question
         }),
            {
               pending: 'Generating answer...',
               success: 'Answer generated successfully',
               error: 'Service is unavailable at this time try again after some time.'
            });
         setReply(response.data.message);
         setIsChange(!isChange);
      } catch (error) {
      }
   };

   return (
      <div className='bg-[#2262ef] rounded-md lg:w-[70%] w-[90%] m-3'>
         <div className='flex items-center my-3 mx-4  bg-gray-100 rounded-lg'>
            <p className='m-2 w-auto'>Enter your query:</p>
            <input className='w-full rounded-md m-2' type="text" value={question} onChange={(e) => setQuestion(e.target.value)} ></input>
            <button className='mx-3 py-2 px-4 bg-[#2262ef] hover:bg-blue-700 text-white rounded-lg' onClick={handleChat}>Send</button>
         </div>
         <div className='m-6 bg-gray-100 h-[460px] p-4 rounded-md'>
            {reply}
         </div>
      </div>
   )
}

export default QnA
