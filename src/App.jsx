import './App.css'
import './sidebar'
import SideBar from './sidebar'
// import Typed from 'typed.js';
import React from 'react';

function App() {
  // el = React.useRef(null)
  //
  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['BOII IM CENTERED'],
  //     typeSpeed: 50,
  //     loop: true,
  //   });
  //
  // return () => {
  //   // Destroy Typed instance during cleanup to stop animation
  //   typed.destroy();
  // };
  // }, []);
  return (
    <>
      {/* Sidebar */}
      <div>
       <SideBar/>
      </div>
      {/* Main content with left padding to avoid sidebar overlap */}
      <div className='text-center bg-transparent pt-10 text-6xl animate-bounce font-extrabold transition-all duration-300'>Boing</div>
      <div className='text-center bg-transparent pt-10 animate-bounce font-extrabold transition-all duration-1000 invisible'>You found the secret Foot</div>
      <div className='text-6xl animate-bounce'>
        Another Div
      </div>
    </>
  )
}

export default App
