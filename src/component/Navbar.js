import React from 'react';
import img from '../media/logo.png';
import '../style/Navbar-shadow.css';
const Navbar=()=>{
    const noppawatLogo = img;
    return(
        <div className='container mt-3 fixed-top mb-5'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light rounded mainSha' id='#top'>
                <a className='navbar-brand bounce' href='#'><img src={noppawatLogo} alt ='logo' id ='mainLogo' width="50px"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='ml-auto'>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav pt-2 ">
                            <a class="nav-item nav-link bounce " href="#aboutme"><h6 className='title shadow-sm'>About me</h6><span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link bounce " href="#portfolio"><h6 className='title shadow-sm'>Portfolio</h6></a>
                            <a class="nav-item nav-link bounce" href="#contact"><h6 className='title shadow-sm'>Contact</h6></a>
                            
                        </div>
                    </div>
                </div>
                
            </nav>
            
        </div>
    )
}
export default Navbar;