import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Photo from './images/pic.png'
import Navbar from './Navbar';
import ResNav from './ResNav';
export default function Myskill() {
    
    return (
        <div className='main'>
             <div className="row">
             <div className="col-lg-4 col-md-4   first-div rounded-right">
                <div class="text-center">
  <img src={Photo} class="rounded-circle" alt="..."/>
</div>
               <div className="my-info">
               <h1 style={{color:'white'}} className='text-center mt-1 h1' >Mahdi Hasan</h1>
                <h4 style={{color:'white'}} className='text-center' >Front-End Developer</h4>
               </div>
               
                <div className="Icon-div text-center mt-5 mr-5">
                <InstagramIcon className='Icon'  />
                <FacebookIcon className='Icon'/>
                <TwitterIcon className='Icon' />
                </div>
                <div className="btn d-flex justify-content-center mt-5 p-5">
                <button type="button" className="btn btn-outline-light btn-lg p-4 ">DOWNLOAD CV</button>
                </div>
              
                <div className="pdiv">
              <p className='text-center  p-5' style={{color:'white',fontSize:'1.8rem',}}>© 2021 All rights reserved.</p>
              </div>
               
            </div>
        <div className="col-lg-6 col-md-6 col-sm-12 second-div rounded-left ">
        <ResNav />
        <div className='skills-div  ' >
        <h1 style={{display:'block',fontWeight:'bold',borderBottom:'.04rem solid var(--my-common)',}}>MY <span style={{color:'var(--first-div)',}}> SKILLS </span> </h1>
             <div class="skill-container ">
                
        <ul style={{marginRight:'35rem'}}>
            
            <li class="html"><h4>HTML</h4> <span style={{color:'var(--my-common)',fontWeight:'bold',}}><h4>98%</h4></span></li>
            <li class="css"><h4>CSS</h4><span style={{color:'var(--my-common)',fontWeight:'bold'}}><h4>95%</h4></span> </li>
            <li class="js"><h4>JAVASCRIPT</h4> <span style={{color:'var(--my-common)',fontWeight:'bold'}}><h4>85%</h4></span> </li>
            <li class="bootstrap"><h4>BOOTSTRAP</h4> <span style={{color:'var(--my-common)',fontWeight:'bold'}} ><h4>95%</h4></span></li>
            <li class="java"><h4>REACT</h4> <span style={{color:'var(--my-common)',fontWeight:'bold'}}><h4>95%</h4></span></li>
            <li class="jquery"><h4>JQUERY</h4><span style={{color:'var(--my-common)',fontWeight:'bold'}}><h4>70%</h4></span></li>
            
        </ul>
    </div>
        </div>
        
        </div>
        <Navbar />
             </div>
        </div>
    )
}
