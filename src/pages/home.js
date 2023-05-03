import React from 'react';
import  Image from 'next/image';
import libraryImage from '../../public/library.png';
import basketballImage from '../../public/basketball.png';
import cafeteriaImage from '../../public/cafeteria.png';

const Home=()=>{
    return <>
            <div className='home-facilites'>
            <h3>Our facilites</h3>
             <p>{`GEMS Our Own Indian School is thoughtfully designed to provide students with a vibrant learning atmosphere.`}</p>
            <div className='row'>
                <div className='col-sm-4'>
                  <div className='fact-lib'>
                   <Image src={libraryImage} alt='/'/>
                    <h3>World Class Library</h3>
                   <p>{`The school has a well-stocked library covering a variety of subjects.Students are encouraged to make full use of the facilities in order to inculcate a love for books and a habit of reading from an early age.`}</p>
                 </div>
                </div>
                <div className='col-sm-4'>
                    <div className='fact-lib'>
                   <Image src={basketballImage} alt='/'/>
                    <h3>Largest Play Ground</h3>
                   <p>{`Beyond the development of skills, our sporting facilities support students in their goals of leading healthy and active lifestyles.`}</p>
                </div>
                </div>
                <div className='col-sm-4'>
                    <div className='fact-lib'>
                   <Image src={cafeteriaImage} alt='/'/>
                    <h3>Tasty and healthy food</h3>
                   <p>{`The school canteen offers a wide range of healthy snacks and beverages at affordable prices. Strict hygienic standards are maintained at all times and children are encouraged to develop healthy eating habits.`}</p>
                </div>
                </div>
            </div>
            </div>
          </> 
        
}

export default Home