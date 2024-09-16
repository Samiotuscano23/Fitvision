import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useScreenSize from '../hooks/useScreenSize';
import cht_bt from '../utils/chatbot_stock.mp4';
import logo from '../utils/logo-light.png';
import pose_ai from '../utils/pose_stock.mp4';
function Services() {
    const screenSize = useScreenSize();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setIsLoggedIn(false);
                }
                else {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                toast.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, [isLoggedIn]);

    const handleChatBotNavigate = () => {
            navigate('/chatbot');
    }
    const handlePoseNavigate = () => {         
            navigate('/Pose');

    }

    return (
        <div id="services" className="flex  h-screen w-auto items-center md:justify-between justify-center md:px-[100px] lg:px-[200px] bg-gradient-to-b from-[#72ddf5]">
            <div id='services-left' className='rounded-xl bg-[#22c9ef] flex xl:flex-row flex-col justify-center xl:w-[600px] lg:w-[500px] md:w-[400px] sm:w-[320px] w-[260px] my-3'>
                <div className='flex flex-col m-4 justify-center   items-center'>
                    <video src={cht_bt} autoPlay loop muted className='w-full mb-4 rounded-lg'></video>
                    <p className='text-sm'>We provide the <span className='font-bold'>chatbot</span> which gives you 24x7 advice According to your doubts related to Health, just for you on your fingure tips!!</p>
                    <button onClick={handleChatBotNavigate} className='mt-4 py-2 px-4 border-2 border-black rounded-lg'>Try the Chatbot</button>
                </div>
                <div id='' className='flex flex-col m-4 justify-center items-center'>
                    <video src={pose_ai} autoPlay loop muted className='w-full mb-4 rounded-lg'></video>
                    <p className='text-sm'>We provide the <span className='font-bold'>Yoga Ai </span>which provides you personal yoga trainer which provide you the accuracy of your yoga pose, any time any where!!</p>
                    <button onClick={handlePoseNavigate} className='mt-4 py-2 px-4 border-2 border-black rounded-lg'>Try the Yoga Ai</button>
                </div>
            </div>
            {(screenSize.width > 1200) ? <img id="services-flower" src={logo} height='400px' width='400px' className='ms-24' /> : <></>}
        </div>
    );
}

export default Services;