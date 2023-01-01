import React from 'react';
import Vector1 from '../img/Vector1.svg';
import Vector2 from '../img/Vector2.svg';
import Vector3 from '../img/Vector3.svg';
import Vector5 from '../img/Vector5.svg';
import Vector6 from '../img/Vector6.svg';
import Vector7 from '../img/Vector7.svg';
import Vector01 from '../img/Vector01.svg';
import './teacherLanguage.css';

const TeacherLanguage = () => {
    return (
        <div className=' my-24'>

            <div className='flex gap-20 items-center justify-center'>

             <div className='icon1'>
                    <div className='icn-bg-1 relative  w-20 h-20  rounded-full '>
                        <div className='absolute bottom-6 ml-5 '>
                             <img className='text-white left-4 h-9 w-9 ' src={Vector01} alt="" />
                        </div>                 
                     </div>

                     <div className='flex gap-2 mt-4'>
                     <p className='font-semibold text-lg'>Language</p>
                     <div className='reltive h-6 w-6   bg-[#51825C] rounded-full'>
                        <div className='absolute ml-2  '>
                        <span className='  text-white '>7</span>
                        </div>                       
                     </div>
                     </div>                     
                 </div>

                 <div className='icon2'>
                    <div className='icn-bg-2 relative  w-20 h-20  rounded-full '>
                        <div className='absolute bottom-6 ml-5 '>
                             <img className='text-white left-4 h-9 w-9 ' src={Vector7} alt="" />
                        </div>                 
                     </div>

                     <div className='flex gap-2 mt-4'>
                     <p className='font-semibold text-lg'>Coding</p>
                     <div className='reltive h-6 w-6   bg-[#51825C] rounded-full'>
                        <div className='absolute ml-1  '>
                        <span className='  text-white '>11</span>
                        </div>                       
                     </div>
                     </div>                     
                 </div>

                 <div className='icon3'>
                    <div className='icn-bg-3 relative  w-20 h-20  rounded-full '>
                        <div className='absolute bottom-6 ml-5 '>
                             <img className='text-white left-4 h-9 w-9 ' src={Vector1} alt="" />
                        </div>                 
                     </div>

                     <div className='flex gap-2 mt-4'>
                     <p className='font-semibold text-lg'>Drum</p>
                     <div className='reltive h-6 w-6   bg-[#51825C] rounded-full'>
                        <div className='absolute ml-2  '>
                        <span className='  text-white '>9</span>
                        </div>                       
                     </div>
                     </div>                     
                 </div>

                 <div className='icon4'>
                    <div className='icn-bg-4 relative bg-[#FF5100] w-20 h-20  rounded-full '>
                        <div className='absolute bottom-6 ml-5 '>
                             <img className='text-white left-4 h-9 w-9 ' src={Vector2} alt="" />
                        </div>                 
                     </div>

                     <div className='flex gap-2 mt-4'>
                     <p className='font-semibold text-lg'>Horns</p>
                     <div className='reltive h-6 w-6   bg-[#51825C] rounded-full'>
                        <div className='absolute ml-2  '>
                        <span className='  text-white '>6</span>
                        </div>                       
                     </div>
                     </div>                     
                 </div>

                 <div className='icon5'>
                    <div className='icn-bg-5 relative bg-[#FF5100] w-20 h-20  rounded-full '>
                        <div className='absolute bottom-6 ml-5 '>
                             <img className='text-white left-4 h-9 w-9 ' src={Vector3} alt="" />
                        </div>                 
                     </div>

                     <div className='flex gap-2 mt-4'>
                     <p className='font-semibold text-lg'>Piano</p>
                     <div className='reltive h-6 w-6   bg-[#51825C] rounded-full'>
                        <div className='absolute ml-2  '>
                        <span className='  text-white '>3</span>
                        </div>                       
                     </div>
                     </div>                     
                 </div>

                 <div className='icon6'>
                    <div className='icn-bg-6 relative bg-[#FF5100] w-20 h-20  rounded-full '>
                        <div className='absolute bottom-6 ml-5 '>
                             <img className='text-white left-4 h-9 w-9 ' src={Vector6} alt="" />
                        </div>                 
                     </div>

                     <div className='flex gap-2 mt-4'>
                     <p className='font-semibold text-lg'>Voice</p>
                     <div className='reltive h-6 w-6   bg-[#51825C] rounded-full'>
                        <div className='absolute ml-2  '>
                        <span className='  text-white '>2</span>
                        </div>                       
                     </div>
                     </div>                     
                 </div>

                 <div className='icon7'>
                    <div className='icn-bg-7 relative bg-[#FF5100] w-20 h-20  rounded-full '>
                        <div className='absolute bottom-6 ml-5 '>
                             <img className='text-white left-4 h-9 w-9 ' src={Vector5} alt="" />
                        </div>                 
                     </div>

                     <div className='flex gap-2 mt-4'>
                     <p className='font-semibold text-lg'>Others</p>
                     <div className='reltive h-6 w-6   bg-[#51825C] rounded-full'>
                        <div className='absolute ml-2  '>
                        <span className='  text-white '>7</span>
                        </div>                       
                     </div>
                     </div>                     
                 </div>


          


             </div>
             <div className='mt-10 flex items-center justify-center'>

                <h1 className=' text-2xl '><span className=' text-[#323232] font-semibold'>We have teachers over</span>  <span className='font-bold text-[#51825C]'>54 Languages</span></h1>
            </div>
            
        </div>
    );
};

export default TeacherLanguage;