import React from 'react'

function ProjectArt(props) {
  return (
      
    <div className="Project-container-left imgSite ">
      <a href={props.link}>
      
        <img src={props.img} alt="none" />
        <br/>
        <h2>
        {props.title}
        </h2>
        </a>
    </div>
    
  )
}

export default ProjectArt