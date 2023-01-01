import React from 'react';
import './footer.css';
import logo from '../img/logo.png';
import facebook from '../img/facebook.png';
import youtube from '../img/youtube.png';
import linkin from '../img/linkin.png';
import instagram from '../img/instagram.png';
import twiter from '../img/twiter.png';



const Footer = () => {
    
    return (
        <div className='bck'>
            <div className='px-24 py-28'>
                <div className='flex gap-8 '>
                    <div className='language-bton'>
                    <label  className=" block mb-2 text-xl font-semibold  text-white">Display Language </label>
                    <select  className="mt-2 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg   ">
 
                            <option value="US">English</option>
                            <option value="CA">Spanish</option>
                            <option value="FR">German</option>
                            <option value="DE">Polish</option>
                     </select>

                    </div>
                    <div className='curency-baton'>
                    <label  className="mb-2 text-xl font-semibold  text-white">Currency </label>
                    <select  className="mt-4 w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg   ">
 
                            <option value="US">$USD</option>
                            <option value="CA">$UK</option>
                            <option value="FR">ROM</option>
                            <option value="DE">TK</option>
                     </select>

                    </div>

                </div>

                <div className='grid grid-cols-8 mt-12 '>
                    
                    <div className='col-span-2'>
                        <div className='flex flex-col '>
                            <div className='h-60 w-60  ml-6 '>
                                <div className='flex  mt-2 ml-10  '>
                                <img className='img-logo h-[81px] w-[57px] ' src={logo} alt="logo" />
                                <div className='font-semibold text-sm text-white'>
                                        <p>Bow</p>
                                        <p>Lake</p>
                                        <p>Music &</p>
                                        <p>Coding</p>
                                        </div>
                                </div>

                                <div className='text-white mt-10 ml-8'>
                                    <p>Apply to Teach</p>
                                    <p>Articles</p>
                                    <p>Support</p>

                                </div>
                            
                            </div>
                            

                        </div>
                    </div>

                    <div className='text-white'>
                        <h1 className='font-semibold text-lg'>Teachers & Tutors</h1>
                        <div className='mt-4 text-white'>
                            <p>Music Teachers</p>
                            <p>Coding Teachers</p>
                            <p>Language Teachers</p>
                            <p>All Teachers</p>

                        </div>

                    </div>
                    <div className='text-white'>
                        <h1 className='font-semibold text-lg'>Coding</h1>
                        <div className='mt-4 text-white'>
                            <p>C Programming</p>
                            <p>C++ Programming</p>
                            <p>Java Script</p>
                            <p>React</p>
                            <p>Node JS</p>
                            <p>PHP</p>
                            <p>Next JS</p>
                            <p>Laravel</p>

                        </div>

                    </div>
                    
                    <div className='text-white'>
                        <h1 className='font-semibold text-lg'> Languages</h1>
                        <div className='mt-4 text-white'>
                            <p>English Language</p>
                            <p>Spanish Language</p>
                            <p>German Languaget</p>
                            <p>Polish Language</p>
                            <p>Turkish Language</p>
                            <p>Italian Language</p>
                            <p>Arabic Language</p>
                            <p>Bengali Language</p>
                            <p>Korean Language</p>
                            <p>All Languages</p>

                        </div>

                    </div>
                    <div className='text-white'>
                        <h1 className='font-semibold text-lg'>Music</h1>
                        <div className='mt-4 text-white'>
                            <p>Guiter</p>
                            <p>Ukulele</p>
                            <p>Pianot</p>
                            <p>Saxophone</p>
                            <p>Drums</p>
                            <p>Violin</p>
                            <p>Horns</p>
                            <p>Voices</p>

                        </div>

                    </div>
                    <div className='col-span-2'>
                        <h1 className='font-semibold text-lg text-white'>Follow us</h1>
                        <div className='flex gap-2 mt-3'>
                            <img src={facebook} alt="" />
                            <img src={youtube} alt="" />
                            <img src={linkin} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twiter} alt="" />

                        </div>

                    </div>

                 
                    

                </div>
                <div className='mt-20'>
                <div className='border-b border-white'></div>

                </div>
                <div className='mt-10'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-white text-sm '>@2022 Bow Lake Music & Coding</h1>
                    </div>
                    <div className='flex'>
                        <div className='flex'>
                        <div className='text-white flex gap-2'>
                        <p className=''>Terms & Conditions</p>
                        <div className='border-r-2 border-white mr-2'></div>
                        </div>
                        <div className='text-white flex gap-2'>
                        <p>Privacy Policy</p>
                        <div className='border-r-2 border-white mr-2'></div>
                        </div>
                        <div className='text-white flex gap-2'>
                        <p>Blogs</p>
                        <div className='border-r-2  border-white  mr-2'></div>
                        </div>
                        <div className='text-white flex gap-2 '>
                        <p>FAQ's</p>
                        
                        </div>

                        </div>
                       

                    </div>
                   <div className='relative flex text-white gap-4 mr-24'>
                    <div className='flex absolute bg-[#659970] gap-4 hover:bg-[#628c6b] text-white font-bold px-3 py-2 rounded-xl'>
                   <div className='flex'>
                   <div className='w-5 h-5 border relative  border-white rounded-full '></div>
                    <div className='absolute ml-2 '>?</div>
                   </div>
                    <button className=''>Help</button>

                    </div>
                   
                   
                  
                   </div>
                   
                       
                     
                   

                </div>
                </div>

            </div>
            

         
            
        </div>
    );
};

export default Footer;
