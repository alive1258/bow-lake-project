import React from 'react';
import './tutors.css';
import Tcard1 from '../img/Tcard1.png';
import Tcard2 from '../img/Tcard2.png'
import Tcard3 from '../img/Tcard3.png';

import pakistanflag from '../img/pakistanflag.png';
import bdflag from '../img/bdflag.png';
import chinaflag from '../img/chinaflag.png'
import fsame from '../img/fsame.png';

import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";



const Tutors = () => {
    return (
        <div className='px-24 py-36'>
        <div className=''>
            <div className=''>

            <div className='flex items-center justify-center mt-20'>
                    <div className=''>
                    <p className='text-[#51825C] font-semibold flex items-center justify-center mb-4 text-2xl '>Tutors</p>
                        <h1 className='text-[#585858] font-semibold  text-5xl '>Learn Your Desired Field</h1>

                        <div className='border-b-2 border-[#51825C]  mt-6 ml-36 w-60'> </div>


                    </div>
               
                </div>

            </div>

            <div className='flex items-center justify-center'>
                <div className='flex gap-8 mt-12'>
                    <span className='border-b-2 vet border-[#51825C] font-semibold text-xl text-[#51825C]'>All Tutors</span>
                    <span className='font-semibold text-xl text-[#b9d5c0]'>Coading Tutors</span>
                    <span className='font-semibold text-xl text-[#b9d5c0]'>Music Tutors</span>
                    <span className='font-semibold text-xl text-[#b9d5c0]'>Language Tutors</span>

                </div>

            </div>

            <div className='mt-12'>
                <div className='flex gap-12 items-center justify-center'>

                    <div className='card-1 hov-all bg-[#ffff] rounded-xl shadow-xl w-[350px] h-[500]'>
                        <img className='img11' src={Tcard1} alt="" />
                        <div className='flex gap-2 mt-2 ml-8'>
                            <h1 className='font-semobold text-2xl text-[#323232]'>Md. Hasibul h.</h1>
                            <div className='flex gap-2 h-5 w-10 mt-2'>
                            <img src={pakistanflag} alt="" />
                            <img src={fsame} alt="" />

                            </div>
                            
                        </div>
                        {/* <section className='team pb-5'>
                            <div className="contaioner">
                                <div className="row">
                                    <div className='col-md-4 col-sm-6 text-center'>
                                        <div className='avter'>
                                        <img className='img11' src={Tcard1} alt="" />
                                        </div>
                                        <div className='box_content'>
                                            <h3 className='title'>asjf us afd</h3>
                                            <span className='post'> cero ajkf</span>

                                        </div>
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea laborum fuga vitae mollitia amet minus nemo reiciendis! Blanditiis excepturi qui quam laudantium dolore officiis ratione? Magni ducimus blanditiis, molestiae dolorem aut alias provident debitis modi fugit quis est totam ratione tempora sunt cumque culpa impedit error quidem quam autem quibusdam pariatur veniam. Repellendus excepturi provident eius debitis molestiae maiores vitae reiciendis? Commodi nam nostrum officiis numquam praesentium.
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </section> */}
                 
       

                        <div className=' mt-2 ml-8 font-semobold text-xl'>
                        <p>Instructor: English & Germar</p>
                            <p>Speaks: English, Germar</p>
                        </div>
                        
                            <div className='flex ml-8'>
                                <p>$16/hour</p>
                                <AiFillStar  className='text-[#FDC425] mt-1'/>
                                <p>5(92)</p>

                            </div>
                            <div className='boton mt-10 ml-8 mb-6'>
                                <button className='flex bg-transparent hover:bg-[#51825C] text-[#51825C] font-semibold hover:text-white py-2 px-4 border border-[#51825C] hover:border-transparent rounded-full'>
                                    View full Profile 
                                    <AiOutlineArrowRight className='mt-2 gap-1 w-6 ' />
                                </button>

                            </div>

                    </div>

                    <div className='card-2 hov-all bg-[#ffff] rounded-xl shadow-lg w-[350px] h-[500]'>
                        <img src={Tcard2} alt="" />
                        <div className='flex gap-2 mt-2 ml-8'>
                            <h1 className='font-semobold text-2xl text-[#323232]'>Itamar Erez</h1>
                            <div className='flex gap-2 h-5 w-8 mt-2'>
                            <img src={bdflag} alt="" />
                            <img src={fsame} alt="" />

                            </div>
                            
                        </div>
                        <div className=' mt-2 ml-8 font-semobold text-lg'>
                        <p>Instructor: English & Germar</p>
                            <p>Speaks: English, Germar</p>
                        </div>
                        
                            <div className='flex ml-8'>
                                <p>$16/hour</p>
                                <AiFillStar  className='text-[#FDC425] mt-1'/>
                                <p>5(92)</p>

                            </div>
                            <div className='boton mt-10 ml-8 mb-5'>
                                <button className='flex bg-transparent hover:bg-[#51825C] text-[#51825C] font-semibold hover:text-white py-2 px-4 border border-[#51825C] hover:border-transparent rounded-full'>
                                    View full Profile 
                                    <AiOutlineArrowRight className='mt-2 gap-1 w-6 ' />
                                </button>

                            </div>

                    </div>

                    <div className='card-3 hov-all bg-[#ffff] rounded-xl shadow-lg w-[350px] h-[500]'>
                        <img src={Tcard3} alt="" />
                        <div className='flex gap-2 mt-2 ml-8'>
                            <h1 className='font-semobold text-2xl text-[#323232]'>Su Min Chang</h1>
                            <div className='flex gap-2 h-6 w-8 mt-2'>
                            <img src={chinaflag} alt="" />
                            <img src={fsame} alt="" />

                            </div>
                            
                        </div>
                        <div className=' mt-2 ml-8 font-semobold text-xl'>
                        <p>Instructor: C++, Python</p>
                            <p>Speaks: English , Chinese</p>
                        </div>
                        
                            <div className='flex ml-8'>
                                <p>$16/hour</p>
                                <AiFillStar  className='text-[#FDC425] mt-1'/>
                                <p>4.6(162)</p>

                            </div>
                            <div className='boton mt-10 ml-8 mb-5'>
                                <button className='flex bg-transparent hover:bg-[#51825C] text-[#51825C] font-semibold hover:text-white py-2 px-4 border border-[#51825C] hover:border-transparent rounded-full'>
                                    View full Profile 
                                    <AiOutlineArrowRight className='mt-2 gap-1 w-6 ' />
                                </button>

                            </div>

                    </div>

                </div>
               
            </div>
            
        </div>
    </div>
    );
};

export default Tutors;