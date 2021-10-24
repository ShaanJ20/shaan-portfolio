import React from 'react'
import Aboutcard from './Aboutcard'
import Blogscard from './Blogscard'
import './CSS/home.css'
import Projectscard from './Projectscard'

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <>
        <nav className="navbar navbar-light bg-white">
            <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">shaan<a style={{color:'#031B9A'}}>.</a></span>
            </div>
        </nav>

        <div className="card-component">
            <Aboutcard/>
            <Projectscard/>
            <Blogscard/>
        </div>

        <div className="footer">
        <span className="twitericons">
            <TwitterIcon></TwitterIcon>
        </span>
        <div className="githubicon">
            <GitHubIcon></GitHubIcon>
        </div>
        </div>
        </>
    )
}
