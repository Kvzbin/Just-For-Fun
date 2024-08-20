import React, { useEffect, useState } from 'react';
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#373A40';
      document.body.style.color = '#F6F5F2';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const buttonStyle = {
    padding: '1.5px 7px',
    cursor: 'pointer',
    // backgroundColor: theme === 'light' ? '#000000' : '#ffffff',
    // color: theme === 'light' ? '#ffffff' : '#000000',
    border: 'none',
    borderRadius: '5px',
  }; 

  return (
    <div className='theme' style={{ textAlign: 'center'}}>
      <button style={buttonStyle} onClick={toggleTheme} title='ChangeTheme'>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default ThemeToggle;
