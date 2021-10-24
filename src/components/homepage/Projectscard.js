import React from 'react'
import './CSS/projectcards.css'

import projectsimg from './Assets/projectsimg.svg'

export default function Projectscard() {
    return (
        <div className="card" style={{width: '20.813rem'}}>
        <img src={projectsimg} className="card-img-top" alt="projectsimg" />
        <div className="card-body">
            <h5 className="card-title">Projects<a style={{color:'#031B9A'}}>.</a></h5>
            <p className="card-text">I have build a lot of projects because REALLY I can’t think a better way of mixing Designing, coding, management at one place</p>
            <a href="/" className="btn btn-primary">Explore.  🚀 </a>
        </div>
    </div>
    )
}
