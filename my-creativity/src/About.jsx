import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Photo from './images/pic.png'
import Navbar from './Navbar';
import ResNav from './ResNav'
export default function About() {
    return (
        <div className="main ">
             <div className='row'>
           
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
            <div className="col-lg-6 col-md-6  col-sm-12 second-div rounded-left ">
            <ResNav />
           <div className="inter ">
           <div className=" div2  col-lg-6   ">
            <h1 className='text-center '> About  <span className='span-tx'> Me</span></h1>
                <p className='h3' style={{textAlign: 'left',fontWeight:'40',}}>
                I'm a Freelance Web Designer & Developer based in Bangladesh with 1+ years experience, I'm Highly experienced in designing & developing custom web  apps with multiple technologies.</p>
            </div>
          <div className="div1 col-lg-6  " style={{lineHeight:'1rem',wordSpacing:'.7rem'}}>
          
               <p  ><span style={{color:'#83A63D'}}>Name:</span>  mahdi hasan <br />
               <span style={{color:'#83A63D'}}>Birthday:</span>        1995 <br />
               <span style={{color:'#83A63D'}}>  Nationality:</span>    Bangladeshi <br />
               <span style={{color:'#83A63D'}}>  Email:</span>   hasanarefi56574@gmail.com <br />
               <span style={{color:'#83A63D'}}>  phone:</span>  01795802507 <br />
               <span style={{color:'#83A63D'}}>  Freelance:</span>      Available
                 </p>

                {/* <p  className='h3' style={{textAlign: 'left',fontWeight:'40',}}><span className='info-sp'> Name: </span> Mahdi Hasan</p>
                
                <p className='h3' style={{textAlign: 'left',fontWeight:'40',}}><span className='info-sp'> Birth Day: </span> 1995</p>
                <p className='h3' style={{textAlign: 'left',fontWeight:'40',}}><span className='info-sp' >Nationality: </span> Bangladeshi</p>
                <p className='h3' style={{textAlign: 'left',fontWeight:'40',}}><span className='info-sp'> Email :</span>hasanarefi56574@gmail.com</p>
                <p className='h3' style={{textAlign: 'left',fontWeight:'40',}}><span className='info-sp'>Phone:  </span> 01795802507</p>
                <p className='h3' style={{textAlign: 'left',fontWeight:'40',}}><span className='info-sp'> Freelance: </span> Available</p> */}
            </div>
         
           </div>
            
           
         <div className="my-skill">
         <div className="div3 mr-5 col-lg-6  smm " >
                <h1 style={{borderBottom:'.09rem solid #6b685f',}}>5+</h1>
           
               
                <h5 style={{display:'block',marginLeft:'3.3rem',}}>YEARS OF EXPERIENCE</h5>
            </div>
            <div className="div3 col-lg-6 " >
                <h1 style={{borderBottom:'.1rem solid #6b685f',textTransform:'uppercase',}}>50+</h1>
               
               
                <h5 style={{display:'block',marginLeft:'3.3rem',textTransform:'uppercase',}}>HAPPY
CUSTOMERS</h5>
            </div>
           
         </div>
           
         <div className="my-skill">
         <div className="div3 mr-5 col-lg-6 smm " >
           <div className="div3-infon">
           <h1 style={{borderBottom:'.1rem solid #6b685f',}}>20+</h1>
               
               
           <h5 style={{display:'block',marginLeft:'2rem',}}>COMPLETED PROJECTS</h5>
           </div>
            </div>
            <div className="div3 col-lg-6  " >
            <h1 style={{borderBottom:'.1rem solid #6b685f',textTransform:'uppercase',}}>4+</h1>
               
               
               <h5 style={{display:'block',marginLeft:'3.3rem',textTransform:'uppercase',}}>DONE
TRAININGS</h5>
            </div>
         </div>
          
        
        
            </div>
            <Navbar />
            </div>

        </div>
            
      
       
       
    )
}
