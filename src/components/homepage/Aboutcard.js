import React from 'react'
import aboutimg from './Assets/aboutimg.svg'
import './CSS/aboutcard.css'

export default function Aboutcard() {
    return (
        <div className="card" style={{width: '20.813rem'}}>
            <img src={aboutimg} className="card-img-top" alt="aboutimg" />
            <div className="card-body">
                <h5 className="card-title">About<a style={{color:'#031B9A'}}>.</a></h5>
                <p className="card-text">Know more about me, my skills, my hobbies, my background and other small things here!</p>
                <a href="/" className="about btn btn-primary">Explore.  🚀 </a>
            </div>
        </div>
    )
}
