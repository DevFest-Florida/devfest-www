import React from 'react';
import { FaGlobe, FaLinkedin, FaMeetup, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gdg_logo from '../assets/2023/gdg.png';

const Footer = () => (

    <footer className='bg-cyan-400 text-black hover:text-black p-10 '>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-11/12 mx-auto'>
            <div className=''>
                <h3>About GDG {process.env.REACT_APP_CHAPTER_NAME}</h3>
                <p>
                    {process.env.REACT_APP_CHAPTER_ABOUT} 
                </p>
                <a href={process.env.REACT_APP_SOCIAL_WEBSITE}>
                    <img src={gdg_logo} className='my-3 p-5 bg-white rounded-xl' alt='GDG {process.env.REACT_APP_CHAPTER_NAME} logo' />
                </a>
            </div>
            <div>
                <h3>Resources</h3>
                <ul>
                    <li>
                        <a href='https://developers.google.com/community/gdg'>Google Developer Groups</a>                        
                    </li>
                    <li>
                        <a href='https://developers.google.com/womentechmakers'>Women Techmakers</a>
                    </li>
                    <li>
                        <a href='https://developers.google.com/community/gdsc'>Google Developer Student Clubs</a>
                    </li>
                    <li>
                        <a href='https://developers.google.com/community/experts'>Google Developer Experts</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <a href={'mailto:' + process.env.REACT_APP_DEVFEST_EMAIL} className='block' aria-label='send email to GDG {process.env.REACT_APP_CHAPTER_NAME}'>{process.env.REACT_APP_DEVFEST_EMAIL}</a>
                <ul className='inline-flex space-x-4 text-xl my-4'>
                    <li>
                        <a href={process.env.REACT_APP_SOCIAL_WEBSITE} aria-label='GDG Chapter Website'><FaGlobe /></a>
                    </li>
                    <li>
                        <a href={'https://twitter.com/' + process.env.REACT_APP_SOCIAL_TWITTER} aria-label='follow GDG {process.env.REACT_APP_CHAPTER_NAME} on Twitter'><FaTwitter /></a>
                    </li>
                    <li>
                        <a href={process.env.REACT_APP_SOCIAL_LINKEDIN} aria-label='follow GDG {process.env.REACT_APP_CHAPTER_NAME} on LinkedIn'><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href={process.env.REACT_APP_SOCIAL_MEETUP} aria-label='follow GDG {process.env.REACT_APP_CHAPTER_NAME} on Meetup'><FaMeetup /></a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>DevFest {process.env.REACT_APP_CHAPTER_NAME}</h3>
                <ul>
                    <li>
                        <Link to='/code-of-conduct'>Code of Conduct</Link> 
                    </li>
                    <li>
                        <Link to='/faq'>FAQ</Link> 
                    </li>
                    <li>
                        <Link to ='/volunteer'>Volunteer</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='my-10 text-center'>
            <div>
                <span>Copyright 2023 Google Developer Groups (GDG) {process.env.REACT_APP_CHAPTER_NAME}.</span>
            </div>
            <div>
                <span>GDG {process.env.REACT_APP_CHAPTER_NAME} is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation.</span>
            </div>
           
        </div>
    </footer>
);

export default Footer;