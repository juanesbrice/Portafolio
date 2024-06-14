import React from 'react';
import './App.css';


import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
import ResponsiveAppBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme} >
        <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
