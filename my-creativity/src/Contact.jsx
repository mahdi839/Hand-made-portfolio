import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Photo from './images/pic.png'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Navbar from './Navbar';
import ResNav from './ResNav'
export default function Contact() {
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
            <div className=" col-lg-6 col-md-6 col-sm-12 second-div rounded-left">
            <ResNav />
            <div className=" div-contact col-lg-12 ">
                <h1 style={{color:'var(--first-div)',textAlign:'center',fontWeight:'bold' }}>CONTACT ME </h1>
                <h3 style={{fontWeight:'bold'}}>DON'T BE SHY !</h3>
                <p style={{fontSize:'2rem'}}>
Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
           
           <div className="col-lg-5 col-md-8 phone1 bd"  >
             
             <LocationOnIcon className='phni mb-3 ' />
            
            
            <h6 style={{fontSize:'2.5rem',}}>Bangladesh</h6>
            <h6 style={{fontSize:'2.5rem', }}>Noakhali</h6>
        </div>
        <div className="col-lg-5 col-md-8 mt-md-3 phone2 bd" >
          <PhoneIcon  className='phni mb-3' />
          <h6 style={{fontSize:'2.5rem',}}>01795802507</h6>
        </div>
           
            
       
        <div  className="col-lg-5 col-md-8 mt-md-3 phone3 bd">
        <EmailIcon className='phni mb-3'/>
        <h6 style={{fontSize:'2rem',}}>hasanarefi56574@gmail.com</h6>
        </div>
        
        <div className="col-lg-5 col-md-8 mt-md-3  phone4 bd" >
         <EventAvailableIcon className='phni mb-3 ' />
         <h6 style={{fontSize:'2.5rem' }}>Freelance Available</h6>
        </div>

           
           
          
       
            </div>
            <Navbar />
            </div>
        </div>
    )
}
