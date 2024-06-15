import React from 'react';
import './App.css';


import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';
import ResponsiveAppBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider theme={theme} >
        <ResponsiveAppBar />
        <Home />
    </ThemeProvider>
  );
}

export default App;
