import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../URL';

const AuthContext = createContext();

const initialState = {
   isLoggedIn: false,
   user: null,
   loading: true
};

const authReducer = (state, action) => {
   switch (action.type) {
      case 'LOGIN':
         return {
            ...state,
            isLoggedIn: true,
            user: action.payload,
            loading: false
         };
      case 'LOGOUT':
         return {
            ...state,
            isLoggedIn: false,
            user: null,
            loading: false
         };
      case 'SET_LOADING':
         return {
            ...state,
            loading: action.payload
         };
      default:
         return state;
   }
};

export const AuthProvider = ({ children }) => {
   const [state, dispatch] = useReducer(authReducer, initialState);

   useEffect(() => {
      const checkLoginStatus = async () => {
         dispatch({ type: 'SET_LOADING', payload: true });
         try {
            const token = localStorage.getItem('token');
            if (token) {
               const response = await axios.get(`${URL}/api/user/profile`, {
                  headers: {
                     Authorization: `Bearer ${token}`
                  }
               });
               dispatch({ type: 'LOGIN', payload: response.data.user });
            } else {
               dispatch({ type: 'LOGOUT' });
            }
         } catch (error) {
            console.error('Error checking login status:', error);
            dispatch({ type: 'LOGOUT' });
         }
         dispatch({ type: 'SET_LOADING', payload: false });
      };

      checkLoginStatus();
   }, []);

   return (
      <AuthContext.Provider value={{ state, dispatch }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
