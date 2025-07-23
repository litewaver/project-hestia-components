import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContactSection from './ContactForm.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ContactForm />
    <Meet />
  </StrictMode>,
)
