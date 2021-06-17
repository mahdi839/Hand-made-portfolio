import React from 'react'
import Typed from 'react-typed'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Photo from './images/pic.png'
import Navbar from './Navbar';
import ResNav from './ResNav'
// import ResNav from './ResNav';
export default function Common() {
  
    
    return (
        <div>
         {/* <ResNav />   */}
 <div className='main  '>
             
            
           <div className="row">
           <div className="col-lg-4 col-md-4   first-div rounded-right  ">
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
            <Typed className='typed-text text-center ' 
               strings={['Mahdi Hasan']}
               typeSpeed={40}
            //    backSpeed={10}
               />
             <h4 className='text-center mt-5 ' style={{fontSize:'2rem',color:'var(--first-div)!important'}}>Front-End Web Developer</h4>
                
                <br />
                <br />
                
                
            </div>
            <Navbar />
           </div>
           
            
        </div>
        </div>
       
    )
}
