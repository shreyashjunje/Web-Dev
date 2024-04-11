import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import { ToastContainer } from 'react-toastify'; // Import ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import default styles

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <App />
      <ToastContainer /> {/* Place ToastContainer at the top level of your component tree */}

      
    </BrowserRouter>

)
