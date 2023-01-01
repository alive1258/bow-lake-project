import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import './hero.css';
import hgirl1 from '../img/hgirl1.png';
import hboy1 from '../img/hboy1.png';
import hboy222 from '../img/hboy222.png';
import hgril2 from '../img/hgril2.png';
import Rectangle from '../img/Rectangle.png';
import lc from '../img/lc.png';


const Hero = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='left  ml-24'>
                <h1 className='font-semibold  text-6xl '>Achieve your <br /> long-standing goals <br /> with us</h1>
                <p className='text-[#323232] mt-10 text-2xl'>Music, coding and language platform that <br /> connects students with tutors.</p>

                <div className='mt-12'>
                    <div className=' flex gap-4 bg-white w-[530px] px-4 items-center justify-between shadow-lg rounded-xl  '>
                        <div className='flex  '>
                            
                        <span className='text-[#51825C] text-lg font-semibold '>Enter Speciality</span>
                        <span className='border-r-2 border bg-[#51825C] ml-4' ></span>

                        </div>
                       

                        <div className=' relative  '>
                        <div className='flex text-[#51825C]  '>
                            <div className='drop'>
                                 <ul>
                                        <li>
                                            <div className='flex gap-2'>
                                                <div className='flex mt-2 '>
                                                <img className='h-4 w-5' src={lc} alt="" />
                                                </div>
                                                <div className='flex'>
                                                <span href="#" className='text-lg font-semibold'>Enter Location  </span>
                                            <AiOutlineDown  className='mt-2 ml-1'/>
                                                </div>                                                                             
                                            </div>                                        
                                        <ul className='cursor-pointer '>
                                            <li><span href="#">Near me</span></li>
                                            <div className='border-b border-[#51825C] '></div>
                                            <li><span href="#">online</span></li>
                                            
                                        </ul>
                                        </li>
                                    </ul>                                   
                                </div>                                                      
                            </div>
                           
                        </div>
                        
                    <button className='bg-[#51825C] gap-4 hover:bg-[#628c6b] text-white font-bold py-2 px-4 rounded-lg'>
                        Search
                </button>
                    </div>

                    {/* <div className="dropdown">
  <label tabIndex={0} className="btn m-1" onClick={()=>{setdropdownOpen(!dropdownOpen)}}>Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div> */}

                </div>

            </div>

            <div className='right'>
                <p className='curcle w-5 h-5 border bg-[#50CE91]  ml-[428px]  rounded-full '></p>
                <div className='grid grid-cols-2'>
                 
                 {/* left img  */}
         <div className='left ml-24 mt-4  '>
                        <div className='img1 top-3 '>
                            <img className=' h-44 w-60' src={hgirl1} alt="" />
                            
                        </div>
                        <div className='reltive'>
                        <p className='curcle absolute mt-8 w-5 h-5 border bg-[#50CE91] rounded-full '></p>

                        </div>
                     
                 <div className='img2 mt-12 ml-6'>
                    <div className='h-60 w-60 bg-[#94CA8F] rounded-full relative '>
                      <div className='h-52 w-52 bg-[#7EA182] rounded-full left-4 top-4   absolute'>
                         <div className='relative  '>
                               <img className='h-60 w-[240px] absolute -top-12' src={hboy1} alt="" />
                         <div className='absolute mt-40'>
                             <div className='relative'>
                                <img src={Rectangle} alt=""  />
                                <div className='absolute -top-[-27px] ml-10'>
                                     <span className='font-semibold text-xl'> Language Skill</span>
                                    <p className='text-center '>Performance</p>                                  
                                    <div className='in-1'>
                                    <input type="range" min="0" max="100" step="5" class="w-[84%] h-1 rounded-sm focus:outline-none;  bg-[#A28C65] appearance-none" />

                                    </div>
                                    <div className='in-2'>
                                    <input type="range" min="0" max="100" step="5" class="w-[84%]  h-1 rounded-sm focus:outline-none;  bg-[#5AA566] appearance-none" />

                                    </div>                                                                                                                                                                         
                
                                </div> 
                             </div>
                             </div>
                         </div>
                     </div>
                    </div>    
                 </div>
             </div>
                    {/* right img  */}
                    <div className='right mt-2  '>
                        
                            {/* <div className=' boy-img2   relative '>
                                <div className='absolute  -top-12 '>
                                <img className='h-64 w-60 ml-0'  src={hboy2} alt="" />
                                </div>
                            </div> */}
                            <div className=''>
                                <img className='' src={hboy222} alt="" />
                            </div>
                            
                     
                        <div className='relative ml-6'>
                            <div className='absolute '>
                            <img className='h-60 w-64 ' src={hgril2} alt="" />
                            <p className=' w-7 h-7  border bg-[#50CE91] rounded-full  '></p>

                            </div>
                            
                        </div>
                       
                   
                        <p className=' w-5 h-5 border ml-60 mt-24 bg-[#50CE91] rounded-full '></p>
                    </div>
                    
                   
                   


                </div>
              

            </div>
            
        </div>
    );
};

export default Hero;