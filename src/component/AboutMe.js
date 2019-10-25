import React from 'react';
import flag from '../media/thai-flag.png';
import downLoadIcon from '../media/download.png';
import '../style/AboutMe.css';
import resume from '../media/noppawatresumepdf2.pdf';
import githubIcon from '../media/github-logo.png';
import reading from '../media/reading.png';
const AboutMe=()=>{
    const thaiFlag = flag;
    const downloadIcon = downLoadIcon;
    const resumeFile = resume;
    const gitIcon = githubIcon;
    const readingIcon = reading;
    return(
        <div className='container mt-5' id='aboutme'>
            <div className='row justify-content-center'>
                <div className='col-8 col-xs-12 jumbotron rounded border-bottom border-right boxSha bg-light pt-4 pb-4'>
                    <h1 className="display-6 text-center">About me</h1>
                    <p className="lead mx-3 text-center">I'm <span className='hvr-underline-from-center'>Noppawat Chotiwan</span>, a 23 years old self-taught developer <span><img  className ='bounce'src={readingIcon} style={{width:'1rem'}}/></span> from Thailand <span><img className='bounce'src={thaiFlag} style={{width:'1.5rem'}}alt='Thai flag'/></span><br/>
                    I worked as a Quality Assurance Engineer at <span className='font-italic'><a href='https://www.wongnai.com/' target='_blank'>Wongnai Media </a></span>
                    from Febuary to August.  My job was to ensure the quality of the software by manual test and automating using <span className='font-italic'><a href='https://pptr.dev/' target='_blank'>Puppeteer  </a></span> 
                    After having been worked for some months, I realized that I wanted to learn more on web development and 
                    become a front end developer.  Then I decided to start learning html, css, 
                    javascript and react. After a while I'm so into the react and decided for 
                    taking change.  In August I decided to leave Wongnai Media to pursue on my 
                    passion to become a front end developer.
                    <br/>If you want to know more about me, please click resume button below.   Thanks!.
                    
                    </p>
                    <hr className="my-2"/>
                    <div className='d-flex justify-content-center'>
                        <a className="btn btn-outline-primary rounded-pill btn-sm  mr-2 bounce" href={resumeFile} role="button" download>
                        <span className='mr-1'><img src={downloadIcon} alt='download icon' style={{width:'1rem'}}/></span>Resume</a>
                        <a className="btn btn-outline-primary btn-shadow btn-sm rounded bounce" href='https://github.com/mcguyvor' role="button" target='_blank'>
                        <span className='mr-1'><img src={gitIcon} alt='download icon' style={{width:'1rem'}}/></span>Github</a>
                    </div>  
                </div>
            </div>
        </div>
    );
}
export default AboutMe;