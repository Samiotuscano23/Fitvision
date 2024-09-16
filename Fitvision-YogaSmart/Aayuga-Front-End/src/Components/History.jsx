import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from '../URL';
import { toast } from 'react-toastify';

const History = ({ isChange }) => {
   const [chatHistory, setChatHistory] = useState([]);
   const [error, setError] = useState("");
   const [viewChat, setViewChat] = useState(null);

   const handleView = (chat) => {
      setViewChat(chat);
   }

   const handleCloseView = () => {
      setViewChat(null);
   }
   const handleClear = () => {
      const user = "Dhvanik";
      setChatHistory([]);
      axios.delete(`${URL}/api/history/${user}`).then((response) => {
         if (response.data.status === "error") {
            setError(response.data.message);
            toast.error(response.data.message);
         }
         else {
            toast.success(response.data.message);
         }
      }).catch((error) => {
         setError("Error in deleting chat history!");
         toast.error("Error in deleting chat history!");
      })
   }
   const fetchChatData = () => {
      const user = "Dhvanik";
      axios.get(`/api/history/${user}`).then((response) => {
         setChatHistory(response.data.Chat);
         if (chatHistory.length == 0) {
            toast.info("No chat history found!");
         }
      }).catch((error) => {
         setChatHistory("No chat history found!");
         toast.error("Error in fetching chat history!");
      });
   }

   useEffect(() => {
      fetchChatData();
   }, [isChange]);
   return (
      <div className='lg:w-[30%] bg-[#2262ef] rounded-md lg:mr-5 w-[90%] my-4'>
         <div className='flex justify-between items-center text-xl my-2 mx-3'>
            <p >Clear History</p>
            <button className='' onClick={handleClear}>
               <i className="ri-delete-bin-line"></i>
            </button>
         </div>
         <div className='bg-gray-100 h-[500px] m-6 rounded-md'>
            <ul>
               {!chatHistory ? "No chat history available" :
                  chatHistory.map((chat, index) => (
                     <li className='flex justify-between items-center mx-2 my-4 bg-white rounded-md px-1 drop-shadow-md' key={index}>
                        <div className='flex justify-center items-center'>
                           <button onClick={() => handleView(chat)} className='bg-[#2262ef] hover:bg-blue-700 text-sm text-white rounded-lg py-1 px-2 h-[30px]'>View</button>
                           <p className='m-2 text-xl'><i className="ri-arrow-right-circle-line"></i></p>
                        </div>
                        <p className='mx-1 text-sm'>{chat.question}</p>
                        <p className='mx-1 text-sm'>{`${chat.date}/${chat.month}/${chat.year}`}</p>
                     </li>
                  ))
               }
            </ul>
            {viewChat &&
               (
                  <div className="overlay-container w-[1000px] overlay fixed bg-dark pt-[10px] pb-[30px] px-[50px] rounded-xl text-white">
                     <div className="chat-view">
                        <button onClick={handleCloseView} className='absolute top-5 right-10 text-3xl'>
                           <i className="ri-close-circle-fill"></i>
                        </button>
                        <div className='m-5'>
                           <div className='font-bold leading-8'>Question:</div>
                           {viewChat.question}
                        </div>
                        <div>
                           <div className='font-bold leading-8'>Answer:</div>
                           {viewChat.answer}
                        </div>
                     </div>
                  </div>
               )
            }
         </div>

      </div >
   )
}

export default History
