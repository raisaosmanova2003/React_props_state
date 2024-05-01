
import  { useState } from 'react';
import "./components/App.css"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={handleToggleTheme}>White theme</button>
        <h1>welcome to react js</h1>
      
    </div>
  );
};

export default App;
