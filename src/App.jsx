import React, { useEffect, useState } from 'react'
import Home from './components/Home';
import Opening from './components/Opening';

const App = () => {

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(()=>{
  const timer = setTimeout(()=>{
    setSplashVisible(false);
  },4000)

  return ()=> clearTimeout(timer);
 },[])


  return (
    <div className="h-screen flex flex-col bg-black text-white">
      
        {isSplashVisible && <Opening/>}
        <Home/>
    
    </div>
  );
};

export default App;
