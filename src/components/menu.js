import React from 'react';
import Image from 'next/image';
import londonImage from '../../public/london.png';
import newyorkImage from '../../public/newyork.png';
import washingtonImage from '../../public/washington.png';


export const Menu=()=>{
    return <div>
    <div className='home-content'>
         <h1>Course We Offer</h1>
          <p>{`Growing up and going to university was a journey that many members of my family took.One by one,each and every relative took themselves off to another city to start a new independent,chapter of their life.Being one of the youngest meant I had to wait.`}</p>
      </div>
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-4'>
               <div className='items'>
                   <h3>Intermediate</h3>
                   <p>{`One of the hardest things about choosing an arts degree is trying to convince others it is the best thing for you.The worry of not having a career by the end of it scares some,but is any course going to guarantee you a job?If anything art is only ever expanding.`}</p>
               </div>
            </div>
            <div className='col-sm-4'>
               <div className='items'>
                  <h3>Degree</h3>
                  <p>{`I was so inspired and ready to start university,and of course,throughout the years of waiting,my ambitions changed drastically.I&apos;d dreamt of being an author,then a vet but by the time UCAS applications swung around,(and I discovered chemistry held no hope for me at all).`}</p>
               </div>
            </div>
            <div className='col-sm-4'>
               <div className='items'>
                  <h3>Post Graduation</h3>
                 <p>{`One of the hardest things about choosing an arts degree is trying to convince others it is the best thing for you.The worry of not having a career by the end of it scares some,but is any course going to guarantee you a job?If anything art is only ever expanding.`}</p>
               </div>
            </div>
        </div>
       </div>
      <div className='home-campus'>
           <h2>Our Global Campus</h2>
          <p>{`It was only the next day that I was contacted to say I had got a place,and I don&apos;t think I&apos;ve ever felt happier.The university was the only choice on my UCAS.I put my faith into them and they put their faith into me.`}</p>
           <div className='row'>
           <div className='col-sm-4'>
              <div className='home-img'>
               <Image src={londonImage} className='img' alt='london'/>
               <div className='layer'>
               <h3>london</h3>
                  </div>     
           </div>
           </div>
           <div className='col-sm-4'>
              <div className='home-img'>
               <Image src={newyorkImage} alt='newyork'/>
               <div className='layer'> 
               <h3>newyork</h3>  
                  </div> 
                  </div>
           </div>
           <div className='col-sm-4'>
              <div className='home-img'>
               <Image src={washingtonImage} alt='washington'/> 
               <div className='layer'>
               <h3>washington</h3>  
               </div>
           </div>
           </div>
           </div>
      </div>
      </div>
} 
