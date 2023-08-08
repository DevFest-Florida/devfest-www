import React from 'react';
import gif from '../assets/2023/DF23_SocialGIF_SaveTheDate_v01.gif';

const Hero = () => (
 
    <section className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div className='my-5 mx-auto'>
            <img src={gif} className="mx-auto" alt='DevFest Save The Date Gif'></img>
        </div>
        <div className='mx-auto text-center sm:my-5 w-11/12'>
            <h1>DevFest {process.env.REACT_APP_CHAPTER_NAME} <br/>
            </h1>
            <h3 className='text-Green500 font-semibold animate-pulse'>Date: {process.env.REACT_APP_DEVFEST_DATE}</h3>
            <p className='sm:px-5 sm:text-lg'>DevFest {process.env.REACT_APP_CHAPTER_NAME} is a community-run one-day conference aimed to bring technologists, developers, students, tech companies, and speakers together in one location to learn, discuss and experiment with technology.</p>
            
            <div className='my-10'>
                    <a href={process.env.REACT_APP_DEVFEST_REGISTRATION_URL} className='text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4'>Register</a> 
            </div>
        </div>
    </section>
    
);

export default Hero;