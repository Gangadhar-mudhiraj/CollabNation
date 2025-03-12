import React from 'react'
// import { StrictMode } from 'react'
import { ToastContainer } from 'react-toastify'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true} // Allow closing on click
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

  </>
  //</StrictMode>,
)
