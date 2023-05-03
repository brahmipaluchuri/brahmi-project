import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import logoImage from '../../public/logo.png';
import Link from 'next/link';


 const Header=()=>{
    const[menuitem,setMenuitem] = useState('')
    const[mobilemenu,setMobilemenu] =useState(false)
    const [left ,setLeft] = useState(-200)
  const getMobilemenuWidth=()=>{
      let timeoutId;
      let flag = true;
      setMobilemenu(document.body.offsetWidth < 600 ? true : false)
      window.addEventListener('resize',()=>{
        let width = document.body.offsetWidth
        if(flag){
            setMobilemenu(width < 600 ? true : false)
            flag=false;  
        }
         clearTimeout(timeoutId)
         timeoutId=setTimeout(()=>{
            setMobilemenu(width < 600 ? true : false)
        },1000)

      })
  }
    useEffect(()=>{
      let pathName = window.location.pathname
      setMenuitem(pathName)
      setMenuitem(pathName.slice(1) || 'home')
      getMobilemenuWidth()
    },[])

    const fnClick=(eve)=>{
        setMenuitem(eve.target.id)
         setLeft(-200)
    }
   const mobileClick=()=>{
        setLeft(left === 0 ? -200 :0)
   }  
   const fnClose=()=>{
    setLeft(-200)  
   }

    return <div>
        <div className='header'>
            <nav>
            <Image src={logoImage} alt='logo'/>
                <div>
                 {mobilemenu && <button onClick={mobileClick} className='btn btn-outline-primary text-danger mobile-menu-btn'>Menu</button>}
                   <ul style={{left:left}} className={mobilemenu ? 'mobile-menu': 'nav-links'}>
                   {mobilemenu && <span onClick={fnClose} className='close-btn'>X</span>}
                    <li><Link id='home' onClick={fnClick} className={menuitem == 'home' && 'active-menu'} href='/home'>Home</Link></li>
                    <li><Link id='about' onClick={fnClick} className={menuitem == 'about' && 'active-menu'} href ='/about'>About us</Link></li>
                    <li><Link id='contact' onClick={fnClick} className={menuitem == 'contact' && 'active-menu'} href ='/contact'>Contact</Link></li>
                    <li><Link id='details' onClick={fnClick} className={menuitem == 'details' && 'active-menu'} href ='/details'>Details</Link></li>
                    <li><Link id='blog' onClick={fnClick} className={menuitem == 'blog' && 'active-menu'} href='/blog'>Blog</Link></li>
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

export default Header