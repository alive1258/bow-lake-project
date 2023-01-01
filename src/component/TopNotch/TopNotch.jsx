import React from 'react';
import topnotch from '../img/topnotch.png';

const TopNotch = () => {
    return (
        <div className='px-28 py-24'>
        <div className=''>
            

           

            <div className='mt-16 ml-20 grid grid-cols-2 relative'>
                <div className=''>
                    <h1 className='font-bold text-5xl text-[#706f6f]'>Get Tuition From Best <br /> Developers</h1> 
                    <div className='mt-6 text-xl text-[#8e998e]'>
                    <span >Choose your ideal teacher <br />
                        from over 1000 qualified music tutors. <br />
                         Choose your ideal teacher <br />
                        from over 1000 qualified music tutors.</span>

                    </div>
                    <div className='absolute ml-[400px] top-44'>
                    <div className='h-6 w-6 rounded-full bg-[#4CC3B3]'></div>

                    </div>
                    
                    <div className='mt-12'>
                    <button className='bg-[#659970] gap-4 hover:bg-[#628c6b]  text-white font-bold py-5 px-10 rounded-xl'>
                       Coding Classes
                </button>
                <div className='ml-72 '>
                    <div className='h-8 w-8 rounded-full bg-[#FFD05B]'></div>

                    </div>
                        
                    </div>
                   

                </div>
              <div className='flex items-center justify-center '>

                <div className=''>
                    <img src={topnotch} alt="" />
                    <div>
                   

                    </div>
                    

                </div>
                
              </div>
              
            </div>
            
        </div>
    </div>
    );
};

export default TopNotch;