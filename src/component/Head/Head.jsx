import React from 'react';
import logo from '../img/logo.png';
import { AiOutlineDown } from "react-icons/ai";
import './head.css';
import Hero from '../Hero/Hero';

const Head = () => {
    return (
        <div>
            
       
        <div className='bgliner-1'>
              <div className=' flex items-center justify-between   mr-24'>
            <div className='flex items-center'>
                
            <div className='flex  flex-shrink-0  logo-1 h-60 w-60 -top-10 bg-[#DFFFE7] rounded-full ml-6 relative'>
            <div className='flex absolute mt-20 ml-10 items-center justify-center '>
            <img className='img-logo h-28 w-[75px] ' src={logo} alt="logo" />
             <div className='font-bold'>
                <p>Bow</p>
                <p>Lake</p>
                <p>Music &</p>
                <p>Coding</p>
             </div>
            </div>     
         </div>

         <div className=' w-full block flex-grow   items-center ml-12  '>
            <div className='flex cursor-pointer items-center gap-4'>
                <span className='text-lg font-semibold '>Find Tutor</span>
                <span className='text-[#51825C] text-lg font-semibold'> Become a Tutor</span>
            </div>
            </div>        
            </div>
      
            <div className=' gap-4 flex items-center justify-between '>
                <div className='flex items-center text-[#51825C] text-lg font-semibold'>
                <div className='drop'>
                                 <ul>
                                        <li>
                                            <div className='flex gap-2'>
                                               
                                                <div className='flex'>
                                                <span href="#" className='text-lg font-semibold'>English,USD </span>
                                            <AiOutlineDown  className='mt-2 ml-1'/>
                                                </div>                                                                             
                                            </div>                                        
                                        <ul>
                                            <li><a href="#">Near me</a></li>
                                            <div className='border-b border-[#51825C] '></div>
                                            <li><a href="#">online</a></li>
                                            
                                        </ul>
                                        </li>
                                    </ul>                                   
                                </div> 


                {/* <p> English,USD</p>   <AiOutlineDown /> */}
                </div>
                
               <button className='bg-[#51825C] gap-4 hover:bg-[#628c6b] text-white font-bold py-2 px-4 rounded-lg'>
                        Book a Free Trial
                </button>
                <button className='bg-transparent gap-4 hover:bg-[#51825C] text-[#51825C] font-semibold hover:text-white py-2 px-4 border border-[#51825C] hover:border-transparent rounded-lg'>
                        Login
                </button>
              
          
            </div>
            
    </div>
    <div>
      <Hero />
        
    </div>
   
            
        </div>

    
        </div>
    );
};

export default Head;