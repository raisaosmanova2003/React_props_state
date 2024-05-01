import  { useState } from 'react';
import './App.css'

const App = () => {
  const [showSquare, setShowSquare] = useState(false);

  const handleClick = () => {
    setShowSquare(true);
  };

  const handleClose = () => {
    setShowSquare(false);
  };


  const myStyle={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1000px',
    height: '100px',
    backgroundColor: 'lightblue',
    display:"flex",
    justifyContent:"space-between",
    padding:"10px",
    borderRadius:"10px",
    boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.75)"
  
  }
  return (
    <div>
      <button onClick={handleClick}>Open Model</button>
      {showSquare ? (
        <div className='text' style={myStyle} >
          <p>some text in the modal 
           </p>
           <div><button onClick={handleClose}>X</button></div>
         
        </div>
      ) : ""
      }
    </div>
  );
};

export default App;
