import React from 'react';
import nytgif from '../media/nytreackhookgif.gif';
import startup from '../media/startup.png';
import githubIcon from '../media/github-logo.png';
import '../style/Portfolio.css';
const Portfolio=()=>{
    const nytGif = nytgif;
    const startupIcon = startup;
    const gitIcon = githubIcon;
    return( 
        <div className='container'>
            <h1 className='title text-center'>Portfolio</h1>
            <div className='card-columns'>
                <div className='card p-2 sha'>
                    <img style={{width:'100%'}}src={nytGif} className='shadow-lg rounded card-img-top p-2'/> 
                        <div className="card-body">
                            <h5 className="card-title title font-weight-bold text-monospace"><u>BANGKOK TIME</u></h5>
                            <p className="card-text">News App, where the user can pick the News from month and year.
                            The app use NewYork Time API for the resources</p>
                            <p className="card-text font-weight-bold text-center"><small><strong>REACT-REACKHOOK-BOOTSTRAP</strong></small></p>
                            <div className='d-flex justify-content-center'>
                                <a className="btn btn-primary rounded-pill mr-2 shadow btn-change" href="https://nytreacthookpractice.firebaseapp.com/" role="button" target='_blank'>
                                <span><img src={startupIcon} className='mr-1'style={{width:'1rem'}}/></span>
                                Visit</a>
                                <a className="btn btn-outline-primary rounded-pill shadow btn-change" href="https://github.com/mcguyvor/react-hook-new-york-time-api" role="button" target='_blank'>
                                <span><img src={gitIcon} className='mr-1' style={{width:'1rem'}}/></span>
                                Github</a>
                            </div>
                            
                        </div>
                </div>
                
            </div>
        </div>
        
    );
}
export default Portfolio;