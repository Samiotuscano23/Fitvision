import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <>
      <div className='overflow-x-clip'>
         <App />
         <ToastContainer
            position="top-center"
            autoClose={3000}
            transition:Bounce
            limit={1}
         />
      </div>
   </>
)
