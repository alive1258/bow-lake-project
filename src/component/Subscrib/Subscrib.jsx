import React from 'react';
import subscrib1 from '../img/subscrib1.png';

const Subscrib = () => {
    return (
        <div className='mt-12'>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <img className='w-full ' src={subscrib1} alt="" />
                </div>
                <div className='bg-[#FFF6A4] mt-[87px]'>
                    <div className=' items-center ml-28 mt-12'>
                    <h1 className='font-semibold text-5xl'>Subscribe For Latest <br /> Courses News</h1>
                    <div className='flex bg-white w-[506px] h-20 rounded-3xl justify-between mt-12' >
                        <div className='px-6 py-6'>
                            <input type="email" 
                             className="w-full  placeholder-opacity-100  border-none rounded outline-none  "             
                             placeholder="Email Your Address " />
                        </div>
                        <div className='py-2 px-2'>
                        <button className='bg-[#659970] gap-4 hover:bg-[#628c6b]  text-white font-bold py-5 px-10 rounded-xl'>
                                Subscribe
                         </button>
                        </div>

                    </div>

                    </div>
                 
                </div>

            </div>
            
        </div>
    );
};

export default Subscrib;