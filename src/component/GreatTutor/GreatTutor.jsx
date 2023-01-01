import React from 'react';
import tutorG from '../img/tutorG.png';

const GreatTutor = () => {
    return (
        <div className='px-24 py-28'>
            <div className='grid grid-cols-2'>
                <div className='img'>
                    <img src={tutorG} alt="" />

                </div>

                <div className='mt-32 ml-10'>
                    <h1 className='font-semibold text-5xl'>You can become a <br /> great tutor too!</h1>
                    <div className='mt-16'>
                        <p className='text-lg font-normal                                                                                                     font-b text-[#6F7382] '>Our tutors are teachers, professors, adjuncts,<br />
                            PhD students, and industry professionals <br />
                            who are all passionate. This time accepting <br />
                            only from the U.S. You're welcome <br />
                            to check back in the future to see if this <br />                                               
                        changes.</p>
                    </div>
                    <div className='mt-16'>
                    <button className='bg-[#659970] gap-4 hover:bg-[#628c6b]  text-white font-bold py-5 px-10 rounded-xl'>
                       Coding Classes
                </button>
                        
                    </div> 
                </div>
                                   

            </div>
            
        </div>
    );
};

export default GreatTutor;