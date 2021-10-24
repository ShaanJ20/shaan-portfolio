import React from 'react'
import Aboutcard from './Aboutcard'
import './CSS/home.css'

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
        </div>
        </>
    )
}
