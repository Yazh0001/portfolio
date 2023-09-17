import React from 'react'

export default function Project({title, description, image, code, site}) {
  return (
    <div className='Project'>
        <img className='projpic' src={image} alt='thumbnail'></img>
        <div className='Project-textbox'>
            <div className='project-title'>{title}</div>
            <div className='project-desc'>{description}</div>
            <div className='project-buttonbox'>
            <button className='projectbutton'><a href={code}>View Code</a></button>
            <button className='projectbutton'><a href={site}>Try it!</a></button>
            </div>
        </div>
        
    </div>
    )
}
