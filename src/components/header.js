import React from 'react';
import Image from 'next/image';
import logoImage from '../../public/logo.png';
import Link from 'next/link';


 const header=()=>{
    return <div>
        <div className='header'>
            <nav>
            <Image src={logoImage} alt='logo'/>
                <div className='nav-links'>
                   <ul>
                    <li><Link legacyBehavior href='/home'><a>Home</a></Link></li>
                    <li><Link href ='/about'><span>About us</span></Link></li>
                    <li><Link href ='/contact'><span>Contact</span></Link></li>
                    <li><Link href ='/histor'><span>Histore</span></Link></li>
                    <li><Link href='/blog'><span>Blog</span></Link></li>
                   </ul>
                </div>
            </nav>
             <div className="home">
                 <h1><span>World </span>Biggest University In India</h1>
                  <p>In the world famous University In indai one time we can visit in this location</p>
                  <button className='btn btn-outline-success mt-3 text-info w-50 display1'>Visit Us To Know More </button>
             </div>
            
        </div>
        </div>
}

export default header