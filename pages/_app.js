// import "@/styles/globals.css";
import '@/styles/style.css';
import { useState } from 'react';
import Navbar from './components/Navbar';

export default function App({ Component, pageProps }) {
  const [windw , setWindw] = useState('sale')
  
   
    const handleCallback = (windw) => {
      setWindw(windw);
    };
  return (
    <div>
      <Navbar onCallback={handleCallback}/>
        <Component {...pageProps} windw={windw} />;
    </div>

  )
  
}
