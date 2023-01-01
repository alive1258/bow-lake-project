import React from 'react';
import musiclLearn from '../img/musiclLearn.png';

const LearnMusic = () => {
    return (
        <div className='px-28 py-4 '>
            
        <div className='ml-20 flex justify-between relative'>
             <div className=''>
                <img src={musiclLearn} alt="" />
              
            </div>

          <div className=' grid justify-items-end mr-20' >
            <div >
                <h1 className='font-bold text-5xl  text-[#706f6f]'>Learn Music With </h1> 
                <p className='font-bold text-5xl  text-[#706f6f] grid justify-items-end '>Experts</p>
               
                <div className='mt-8 text-xl text-[#8e998e] grid justify-items-end'>
                     <span className='grid justify-items-end '>Choose your ideal teacher</span> 
                    <p>from over 1000 qualified music tutors. </p>
                     <span className='grid justify-items-end '>Choose your ideal teacher </span>
                   
                    <p> from over 1000 qualified music tutors</p>

                </div>
                <div className='grid justify-items-end mt-8 '>
                <button className='bg-[#659970]  hover:bg-[#628c6b]  text-white font-bold py-5 px-10 rounded-xl'>
                   Coding Classes
                    </button>
                    
                </div>

            </div>
            
             
               

            </div>

            
            
       
          
        </div>
        
    </div>
    );
};

export default LearnMusic;