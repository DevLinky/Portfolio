import React from 'react'

function Project(props) {
  return (
      
    <div className="Project-container-left">
      <a href={props.link}>
      </a>
        <img src={props.img} alt="none" />
        <br/>
        <h2>
        {props.title}
        </h2>
    </div>
    
  )
}

export default Project