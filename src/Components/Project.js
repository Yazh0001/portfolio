import React from 'react'

export default function Project({title, description, image, code, site}) {
  return (
    <div className='Project'>
        <img id='projpic' src={image} alt='thumbnail'></img>
        <div className='Project-textbox'>
            <div className='project-title'>{title}</div>
            <div className='project-desc'>{description}</div>
            <a className='project-button' href={code}><button>View Code</button></a>
            <a className='project-button' href={site}><button>Try it!</button></a>
        </div>
        
    </div>
    )
}
