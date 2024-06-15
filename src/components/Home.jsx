import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Typography from '@mui/material/Typography';


function Home() {

    const [text] = useTypewriter({
        words : ['Frontend', 'Backend','Fullstack'],
        loop : {},
        typeSpeed: 90,
        deleteSpeed: 80
    }) 

  return (

    <div className="home-container" style={{ textAlign: 'center', marginTop: '300px' }}>
    <Typography
      variant="h3"
      component="a"
      href="Portafolio"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.1rem',
        color: 'white',
        textDecoration: 'none',
        marginBottom: '10px', 
        display: 'block', 
      }}
    >
      Soy Juan Esteban Briceño,
    </Typography>
  
    <Typography
      variant="h3"
      component="a"
      href="Portafolio"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.1rem',
        color: 'white',
        textDecoration: 'none',
        display: 'block', 
      }}
    >
      Desarrollador{' '}
      <span style={{ color: '#2196f3', marginLeft: '5px' }}>{text}</span>
    </Typography>
  </div>
  



  
  )
}

export default Home
