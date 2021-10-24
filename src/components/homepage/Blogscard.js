import React from 'react'
import './CSS/blogscard.css'
import blogsimg from './Assets/blogsimage.svg'

export default function Blogscard() {
    return (
        <div className="card" style={{width: '20.813rem'}}>
        <img src={blogsimg} className="card-img-top" alt="blogsimg" />
        <div className="card-body">
            <h5 className="card-title">Blogs<a style={{color:'#031B9A'}}>.</a></h5>
            <p className="card-text">This is something that I am starting to express what all things I learn it can be fom a video or an article or a tweet etc.</p>
            <a href="/" className="btn btn-primary">Explore.  🚀 </a>
        </div>
    </div>
    )
}
