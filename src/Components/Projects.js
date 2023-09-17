import React from 'react'
import Project from './Project'
import mmg from './mmg.png'
import music from './musicicon.jpg'
import landing from './landing.png'

const Projects = () => {
  return (
    <ul id='Projects'>
      <Project 
      title={"Mammogram Segmentation"} 
      description={"This was my final year project in university. Working in a team of 4, we built a program which identifies the pectoral muscle region in x-ray mammorgrams. I used VueJS in the development of the user application."} 
      image={mmg}
      code={"https://github.com/NitinMa2/mammography-muscle-removal"}
      site={"#"}/>

      <Project 
      title={"Music Player"} 
      description={"Fully fuctional music player app (Spotify clone)"} 
      image={music}
      code={"https://github.com/Yazh0001/music_player"}
      site={"https://deluxe-dango-732284.netlify.app/"}/>

      <Project 
      title={"Landing Page"} 
      description={"This was a placeholder landing page that I created as part of a previous technical interview"} 
      image={landing}
      code={"#"}
      site={"#"}/>
    </ul>
  )
}

export default Projects