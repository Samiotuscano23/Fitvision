import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import { URL } from '../URL';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Profile = () => {
   const { state, dispatch } = useAuth(); // Use state and dispatch from AuthContext
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchUserProfile = async () => {
         try {
            const tokenValue = localStorage.getItem('token');
            if (tokenValue) {
               const response = await axios.get(`${URL}/api/user/profile`, {
                  headers: {
                     Authorization: `Bearer ${tokenValue}`
                  }
               });
               dispatch({ type: 'LOGIN', payload: response.data.user });
            }
         } catch (error) {
            toast.error('Error fetching user profile');
         } finally {
            setLoading(false);
         }
      };

      fetchUserProfile();
   }, [dispatch]);

   const handleLogout = () => {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
      navigate('/');
      toast.success("Logged out successfully!");
   };

   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-[#72ddf5]">
         {loading ? (
            <Loading />
         ) : (
            state.user ? (
               <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <h2 className="text-2xl font-bold mb-4">Welcome, {state.user.username}!</h2>
                  <p className="text-lg mb-4">Email: {state.user.email}</p>
                  <p className="text-lg mb-4">Height: {state.user.height} cm</p>
                  <p className="text-lg mb-4">Weight: {state.user.weight} kg</p>
                  <p className="text-lg mb-4">Blood Group: {state.user.bloodGroup}</p>
                  <button className="bg-[#2262ef] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleLogout}>Logout</button>
               </div>
            ) : (
               <Loading />
            )
         )}
      </div>
   );
};

export default Profile;
