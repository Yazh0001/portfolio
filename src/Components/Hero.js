import React from 'react'
const Hero = () => {
  return (
    <div className='Hero'>
      <div>
        <h1>Yasir Azhari</h1>
        <h2>Frontend developer</h2>

        <div className='hero-buttonbox'>
        <a href='#Projects'><button>Projects</button></a>
        <a href='#Contact'><button>Contact Me</button></a>
        </div>
      </div>

      {/* <img src={require('../assets/338.jpg')} alt='blob' height={500}></img> */}
    </div>
  )
}

export default Hero