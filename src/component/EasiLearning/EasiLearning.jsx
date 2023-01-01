import React from 'react';
import esy1 from '../img/esy1.svg';
import easip from '../img/easip.png';
import easip2 from '../img/easip2.png'
import './easilearning.css';

const EasiLearning = () => {
    return (
        <div className='px-24 py-28 '>
            <div className='border11 '>
                <div className='back22 absolute'>

                    <div className='flex items-center justify-center mt-20'>
                        <div className=''>
                        <p className='text-[#51825C] font-semibold flex items-center justify-center mb-4 text-2xl '>How it works</p>
                            <h1 className='text-[#585858] font-semibold  text-5xl '>Easiest Learning Way</h1>
                            <div className='border-b-2 border-[#51825C]  mt-6 ml-28 w-60'> </div>
                        </div>                   
                    </div>

                    <div className='mt-12 relative'>
                        <div className=' '>
                            <div className=' flex items-center justify-center gap-16 '>
                            <div className='easicar1 gap-4'>
                                <img src={esy1} alt="" />
                                <div className='mt-4 flex '>
                                    <div className='  flex  flex-col'>
                                    <h1 className='font-semibold text-lg text-[#323232] mb-4'>Find Instructors</h1>
                                    <span className='text-sm '> Choose your ideal teacher </span>
                                    <p className='text-sm '>from over 1000 qualified music tutors.</p>

                                   </div>
                                </div>                              
                            </div>

                            <div className='easicar2 '>
                                <img src={easip} alt="" />
                                <div className='mt-4 flex  '>
                                    <div className=' items-center  flex  flex-col'>
                                    <h1 className='font-semibold text-lg text-[#323232] mb-4'>Schedule a class </h1>
                                    <span className='text-sm '> Find the perfect time for </span>
                                    <p className='text-sm '>your schedule.</p>
                                    <span className='text-sm '>Book lesson in seconds via all devices</span>

                                    </div>
                                </div>                              
                            </div>

                            <div className='easicar3 '>
                                <img src={easip2} alt="" />
                                <div className='mt-4 flex  '>
                                    <div className=' items-center flex  flex-col '>
                                    <h1 className='font-semibold text-lg text-[#323232] mb-4'>Start learning </h1>
                                        <span className='text-sm '> Join class on time, as simple </span>
                                        <p className='text-sm '>as that</p>
                                    </div>                              
                                </div>                            
                            </div>
                            </div>                                                                           
                        </div>                    
                    </div>
                    <div className='baton flex items-center justify-center mt-6'>
                    <button className='bg-[#51825C] gap-4 hover:bg-[#628c6b] ml-6 text-white font-bold py-5 px-10 rounded-lg'>
                        Book a Free Trial
                </button>                        
                    </div>
                </div>
            </div>                        
        </div>
    );
};

export default EasiLearning;