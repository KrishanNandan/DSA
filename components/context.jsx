/**Context component*/
import { createContext } from 'react';

// Initialize with null or a default object structure
export const ThemeContext = createContext(null);


/**Parent*/
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    // We pass an object containing both the value and the function
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={theme}>
        <h1>Context Theme Switcher</h1>
        <ThemeToggleButton />
      </main>
    </ThemeContext.Provider>
  );
}


/**Child */
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggleButton() {
  // Grab both theme and setTheme from the context object
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggle}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}