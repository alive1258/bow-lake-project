import React from 'react';
import Evaluation from '../img/Evaluation.svg';
import v10 from '../img/v10.svg';
import './guarantee.css';

const Guarantee = () => {
    return (
        <div className='mt-12 px-36'>
        <div className='flex  gap-6' >

            {/* <div className='grid grid-cols-3'>

                <div className='relative'>
                    <div className='absolute techr'>
                    <h1 className='text-[#b9d4be] font-semibold text-5xl'>100+</h1>
                    <h2 className='font-semibold text-2xl text-[#b9d4be]'>Teacher</h2>

                    </div>
                  
                </div>

                <div className='cls relative'>
                <div className='h-36 w-36  absolute ml-1 bottom-1 bg-[#5d9e6b] rounded-full'>
                    <div className='absolute top-6 ml-5'> 
                    <h1 className='text-white font-bold text-6xl'>10+</h1>
                    <h2 className='text-white font-semibold mt-2 text-xl ml-5'>Classes</h2>

                    </div>
                   
                </div>
                </div>
              
                <div className='relative'>
                    <div className='absolute stdnt'>
                    <h1 className='text-[#b9d4be] font-semibold text-5xl'>2K+</h1>
                    <h2 className='font-semibold text-2xl text-[#b9d4be]'>Students</h2>

                    </div>
                </div>
            

            </div> */}
            <div className='ml-36 mt-12'>
                <img className='w-full h-full' src={Evaluation} alt="" />

            </div>

            <div className='separator mt-36'></div>


            <div className='mt-12'>
                <div className=' qutality'>
                    <div className='flex gap-4'>
                    <img src={v10} alt="" />
                    <h1 className='font-semibold text-2xl text-[#323232]'>We guarantee Quality</h1>
                    </div>
                    <p className='ml-16 text-sm '>We will provide you with the best knowledge about your chosen field</p>
                    

                </div>

            </div>

        </div>

       </div>
    );
};

export default Guarantee;