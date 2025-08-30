import React from 'react'
import './App.css'
import SideBar from './sidebar.jsx'

const Home = () => {
  return (
    <>
      <SideBar/>
      <div className='text-center bg-transparent pt-10 animate-bounce font-extrabold transition-all duration-300'>
        BOIII IM CENTERED<br/>
        This is a simple application with a sidebar.
      </div>
      <div className='text-6xl'>
        Another Div
      </div>
    </>
  );
}

export default Home
