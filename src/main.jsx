import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import Rank from './component/Rank.jsx'
import Contest from './component/Contest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Rank />
    <Contest />
  </React.StrictMode>,
)
