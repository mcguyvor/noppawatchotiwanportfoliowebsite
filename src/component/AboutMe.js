import React from 'react';
import flag from '../media/thai-flag.png';
import downLoadIcon from '../media/download.png';
import '../style/AboutMe.css';
import resume from '../media/NoppawatChotiwanresume2024.pdf';
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
                    <p className="lead mx-3 text-center">I'm <span className='hvr-underline-from-center'>Noppawat Chotiwan</span>, a 28 years old self-taught developer <span><img  className ='bounce'src={readingIcon} style={{width:'1rem'}}/></span> from Thailand <span><img className='bounce'src={thaiFlag} style={{width:'1.5rem'}}alt='Thai flag'/></span><br/>
                    With a robust background in developing and maintaining web applications,
                    <br/> I'm currently work at <span className='font-italic'><a href='https://fptsoftware.com/' target='_blank'>FPT Software</a></span>, focusing on high-quality web applications using React, Next.js, and TypeScript. 
                    <br/>
                    At <span className='font-italic'><a href='https://www.moneyherogroup.com/' target='_blank'>MoneyHero Group</a></span>, I boosted conversion rates and enhanced UI/UX for platforms like Money101 and Singsaver.
                    <br/>
                    Previously, I developed automation tests at <span className='font-italic'><a href='https://www.wongnai.com/' target='_blank'>Wongnai</a></span> and led end-to-end testing projects at <span className='font-italic'><a href='https://pomelofashion.com/th/th/' target='_blank'>Pomelo</a></span>. Recognized with several awards.
                    <br/>
                    With a passion for frontend development, fintech, OTA and startups, I continuously strive to innovate and deliver exceptional results.
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