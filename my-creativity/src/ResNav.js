import React from 'react'
import {NavLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import WorkIcon from '@material-ui/icons/Work';
import MenuIcon from '@material-ui/icons/Menu';
import Photo from './images/pic.png'
export default function ResNav() {
    return (
       
           <div className='may' >
           <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler hmn" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation ">
     <MenuIcon className="navbar-toggler-icon hmI " fontSize='large' />  
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ">
    <div class="text-center">
  <img src={Photo} class="rounded-circle" alt="photo"/>
</div>
<div className="my-info">
               <h1 style={{color:'white'}} className='text-center mt-1 h1' >Mahdi Hasan</h1>
                <h4 style={{color:'white',fontSize:'2.5rem'}} className='text-center' >Front-End Developer</h4>
               </div>
      <li className="nav-item active"style={{marginRight:'6rem'}} >
        {/* <a className="nav-link" href="#">ami <span className="sr-only">(current)</span></a> */}
        <NavLink exact activeClassName='active_class' className='nal' to='/'> <HomeIcon className='home2'/>Home</NavLink>
       
      </li>
      <li className="nav-item"style={{marginRight:'4.8rem'}}>
        {/* <a className="nav-link" href="#">bout</a> */}
        <NavLink exact activeClassName='active_class' className='nal' to='/about'> <PermIdentityIcon className='home2'/> About</NavLink>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href=""> home</a> */}
        <NavLink exact activeClassName='active_class'className='nal'   to='/contact'> <ContactPhoneIcon className='home2'/> Contact</NavLink>
      </li>
      <li className="nav-item" style={{marginRight:'7rem'}}>
      <NavLink exact activeClassName='active_class' className='nal' to='/skill'> <WorkIcon className='home2'/> Skill</NavLink>
      </li>
    </ul>
  </div>
</nav>
           </div>
       
    )
}
