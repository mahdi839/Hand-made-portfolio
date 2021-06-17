import React from 'react'
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import WorkIcon from '@material-ui/icons/Work';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles =makeStyles({
   root:{
      width:'4rem',
      height:'2rem',
      background:'white',
      color:'black'
      
   }
})

export default function Navbar() {
    const classes =useStyles();
    
    return (
      
       <div className="last col-1 ml-5">
            <div className='my-nav'>
           
            <Link to='/'> 
            <Tooltip  title="Home"  >
            <HomeIcon className='home ' />
          </Tooltip>
             </Link>
           
            <Link to='/about'> <PermIdentityIcon className='home' />
              
           <span className='tool' >
           About
           </span>
             
              </Link>
            <Link to='/contact'> <ContactPhoneIcon className='home' />
            <span className='tool' >
           Contact Me
            </span>
            </Link>
            <Link to='/skill'> <WorkIcon className='home'/><span className='tool'>My Skill</span></Link>

        </div>
       </div>
    )
}
