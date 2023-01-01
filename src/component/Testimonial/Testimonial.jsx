import React from 'react';
import './testimonial.css';
import testi1 from '../img/testi1.png';
import testi2 from '../img/testi2.png';
import testi3 from '../img/testi3.png';
import ts1 from '../img/ts1.png';
import ts2 from '../img/ts2.png';
import ts3 from '../img/ts3.png';

import ts5 from '../img/ts5.png';
import ts6 from '../img/ts6.png';


const Testimonial = () => {
    return (
        <div className=''>
        <div className=''>
          <div className=''>
            <div className='flex items-center justify-center mt-20'>
              <div className=''>
                <p className='text-[#51825C] font-semibold flex items-center justify-center mb-4 text-2xl '>Testimonial</p>                        <h1 className='text-[#585858] font-semibold  text-5xl '>What Our Users Say</h1>
  
              </div>
            </div>
          </div>
  
          <div className='bg-[#f3f6f4] w-full h-[670px]'>
            <div className='flex items-center justify-center'>
              <div className='border-b-2  border-[#7eba8c]  mt-4 w-60'> </div>
  
            </div>
  
            <div className='mt-24'>
                <div className='flex gap-12 items-center justify-center'>

                    <div className='card-1 box relative bg-[#ffff] rounded-xl shadow-xl w-[350px] h-[500]'>
                       <div className=''>
                        <div className=' '>
                        <div className='img -top-14 ml-36   absolute'>
                          <img src={testi1} alt="" />

                        </div>

                        </div>
                        
                     
                       <div className='ml-10 mt-20'>
                       <div className='title-1 '>
                        <div className='mb-6'>
                        <h1 className='font-semibold text-xl text-[#323232]'>Susan Kethi</h1>
                        <p className='font-semibold text-sm text-[#323232]'>Designer @ Durabara</p>

                        </div>
                      

                       </div>
                       <div className=''>
                       <p className='mt-6 mb-8 font-normal text-lg text-[#858585]'>The teacher (Kitty) was always <br />
                          there if you needed her. She <br />
                          was great! Looking into to br <br />
                          signing up some of my staff. <br />
                          Looking forward to taking <br />
                            another class.
                        </p>

                       </div>
                     


                       </div>
                      
                       </div>
                       
                       
                       

                    </div>

                    <div className='card-2 box relative bg-[#ffff] rounded-xl shadow-xl w-[350px] h-[500]'>
                       <div className=''>
                        <div className=' '>
                        <div className='img -top-14 ml-36 absolute'>
                          <img src={testi2} alt="" />

                        </div>

                        </div>
                        
                     
                       <div className='ml-10 mt-20'>
                       <div className='title-1 '>
                        <div className='mb-6'>
                        <h1 className='font-semibold text-xl text-[#323232]'>Susan Kethi</h1>
                        <p className='font-semibold text-sm text-[#323232]'>Designer @ Durabara</p>

                        </div>
                      

                       </div>
                       <div className=''>
                       <p className='mt-6 mb-8 font-normal text-lg text-[#858585]'>The teacher (Kitty) was always <br />
                          there if you needed her. She <br />
                          was great! Looking into to br <br />
                          signing up some of my staff. <br />
                          Looking forward to taking <br />
                            another class.
                        </p>

                       </div>
                     


                       </div>
                      
                       </div>
                       
                                             

                    </div>

                    <div className='card-3 box relative bg-[#ffff] rounded-xl shadow-xl w-[350px] h-[500]'>
                       <div className=''>
                        <div className=''>
                        <div className='img -top-14 ml-36 absolute'>
                          <img src={testi3} alt="" />

                        </div>
                        </div>
                        
                     
                       <div className='ml-10 mt-20'>
                       <div className='title-1 '>
                        <div className='mb-6'>
                        <h1 className='font-semibold text-xl text-[#323232]'>Susan Kethi</h1>
                        <p className='font-semibold text-sm text-[#323232]'>Designer @ Durabara</p>

                        </div>
                      

                       </div>
                       <div className=''>
                       <p className='mt-6 mb-8 font-normal text-lg text-[#858585]'>The teacher (Kitty) was always <br />
                          there if you needed her. She <br />
                          was great! Looking into to br <br />
                          signing up some of my staff. <br />
                          Looking forward to taking <br />
                            another class.
                        </p>

                       </div>
                     


                       </div>
                      
                       </div>
                       
                       
                       

                    </div>

                </div>
               
            </div>


            <div className='mt-24 '>
              <div className='flex gap-3 justify-center ml-96'>
                <div className='box'>
                  <img src={ts1} alt="" />

                </div>
                <div className='box'>
                  <img src={ts2} alt="" />

                </div>
                <div className='box'>
                  <img src={ts3} alt="" />

                </div>
                <div className='box'>
                  <img src={ts1} alt="" />

                </div>
                <div className='box'>
                  <img src={ts5} alt="" />

                </div>
                <div className='box'>
                  <img src={ts6} alt="" />

                </div>

              </div>
             
            </div>
  
          </div>
      
  
  
  
        </div>
        
       
  
  
      </div>
    );
};

export default Testimonial;