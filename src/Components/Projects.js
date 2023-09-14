import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <ul id='Projects'>
      <Project 
      title={"Mammogram Segmentation"} 
      description={"This was my final year project in university. Working in a team of 4, we built a program which identifies the pectoral muscle region in x-ray mammorgrams. I used VueJS in the development of the user application."} 
      image={"../assets/mmg.png"}
      code={"https://github.com/NitinMa2/mammography-muscle-removal"}
      site={"#"}/>

      <Project 
      title={"Music Player"} 
      description={"Fully fuctional music player app (Spotify clone)"} 
      image={"../assets/logo192.png"}
      code={"https://github.com/Yazh0001/music_player"}
      site={"https://deluxe-dango-732284.netlify.app/"}/>

      <Project 
      title={"Project Title"} 
      description={"This is the project description"} 
      image={"../assets/logo192.png"}
      code={"#"}
      site={"#"}/>
    </ul>
  )
}

export default Projects