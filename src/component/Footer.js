import React from 'react';
import '../style/Footer.css';
import githubIcon from '../media/github-logo.png';
import linkedinIcon from '../media/linkedin.png';
const Footer=()=>{
    return(
        <div className='container mt-2 mb-5 pt-5' id='contact'>
            <h1 className='title primary text-center mb-3'>MY CONTACT</h1>
            <div className='d-flex justify-content-center mb-3'>
                <a href='mailto:noppawatchotiwan@gmail.com'><h3 className='title primary text-center hvr-shutter-out-vertical'>noppawatchotiwan@gmail.com</h3></a>
            </div>
            <div className='row'>
                <div className='col-5'></div>
                <div className='col-2 align-self-center'>
                    <div className='d-flex justify-content-between'>
                        <a href='https://github.com/mcguyvor' className='glow-on-hover ' target='_blank'><img  style={{width:'2.5rem'}}src={githubIcon}/></a>
                        <a href='https://www.linkedin.com/in/noppawat-chotiwan-938822178/' className='glow-on-hover ' target='_blank' ><img style={{width:'2.5rem'}}src={linkedinIcon}/></a>
                    </div>
                    <div className='col-5'></div>

                </div>
            </div>    
        </div>
    );
}
export default Footer;