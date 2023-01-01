import React from 'react';
import catgaopic from '../img/catgaopic.png';

const Categories = () => {
    return (
        <div className='px-28 py-24'>
        <div className=''>
            <div className=''>

            <div className='flex items-center justify-center mt-20'>
                    <div className=''>
                    <p className='text-[#51825C] font-semibold flex items-center justify-center mb-4 text-2xl '>Categories</p>
                        <h1 className='text-[#585858] font-semibold  text-5xl '>Learn Your Desired Field</h1>

                        <div className='border-b-2 border-[#51825C]  mt-6 ml-36 w-60'> </div>
                    </div>
               
                </div>

            </div>

            <div className='flex items-center justify-center'>
                <div className='flex gap-12 mt-12'>
                    <span className='border-b-2 vet border-[#51825C] font-semibold text-xl text-[#51825C]'>All Classes</span>
                    <span className='font-semibold text-xl text-[#b9d5c0]'>Coading Classes</span>
                    <span className='font-semibold text-xl text-[#b9d5c0]'>Music Classes</span>
                    <span className='font-semibold text-xl text-[#b9d5c0]'>Language Classes</span>

                </div>
            </div> 
            <div className='mt-16 ml-20 grid grid-cols-2 relative'>
                <div className=''>
                    <h1 className='font-bold text-5xl text-[#706f6f]'>Get Tuition From Best <br /> Developers</h1> 
                    <div className='mt-6 text-xl text-[#8e998e]'>
                    <span >Choose your ideal teacher <br />
                        from over 1000 qualified music tutors. <br />
                         Choose your ideal teacher <br />
                        from over 1000 qualified music tutors.</span>

                    </div>
                    <div className='absolute ml-[430px] '>
                    <div className='h-8 w-8 rounded-full bg-[#7C5BFF]'></div>

                    </div>
                    
                    <div className='mt-12'>
                    <button className='bg-[#659970] gap-4 hover:bg-[#628c6b]  text-white font-bold py-5 px-10 rounded-xl'>
                       Coding Classes
                </button>
                        
                    </div>
                   

                </div>
              <div className='flex items-center justify-center '>

                <div className=''>
                    <img src={catgaopic} alt="" />
                    <div>
                    <div className='h-6 w-6 rounded-full bg-[#C38C4C]'></div>

                    </div>
                    

                </div>
                
              </div>
              
            </div>
            
        </div>
    </div>
    );
};

export default Categories;