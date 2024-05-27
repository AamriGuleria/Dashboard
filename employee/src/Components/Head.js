import React,{useState,useEffect} from 'react'
import "./Head.css"
const Head = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const formattedDateTime = now.toLocaleString();
          setCurrentDateTime(formattedDateTime);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="header">
      <p className="Logo"><span className='logo'>hello</span>Employee Activity Dashboard</p>
      <p className="Date">{currentDateTime}</p>
    </div>
  )
}

export default Head
