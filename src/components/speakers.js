
import React, { useEffect, useState } from 'react';
import { FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';
import BioModal from './modal';


const SpeakerProfiles = () => {

    const [speakers, setSpeakers] = useState([])

    const fetchData = () => {
        fetch('https://sessionize.com/api/v2/dd70zb20/view/Speakers')
            .then(response => {
                return response.json()
            })
            .then(data => {
                data.sort((a, b) => a.lastName.localeCompare(b.lastName));
                setSpeakers(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <section className='text-center bg-LightBlue py-10'>
            <h2 className="my-10">Featured Speakers</h2>
            <div className='w-11/12 mx-auto'>
                {speakers.length > 0 && (
                    <div className='flex flex-wrap justify-center'>
                        {speakers.map(speaker => (
                            <div className='p-5 "w-full md:w-1/2 lg:w-1/3' key={speaker.id}>
                                <img src={speaker.profilePicture} alt={speaker.fullName} className='rounded-full w-48 mx-auto'></img>
                                <h3 className='font-semibold'>{speaker.fullName}</h3>

                                {speaker.links.length > 0 && (

                                    <ul className='inline-flex space-x-4 text-xl my-2'>
                                        <li><BioModal speaker={speaker} /></li>
                                        {speaker.links.forEach(link => {
                                            if (link.title === 'Twitter') {
                                                link.title = <FaTwitter />
                                            } else if (link.title === 'LinkedIn') {
                                                link.title = <FaLinkedin />
                                            } else if (link.title === 'Company Website' || link.title === 'Blog' || link.title === 'Website')
                                                link.title = <FaGlobe />
                                        }
                                        )}
                                        {speaker.links.map(link => (
                                            <li key={speaker.lastName + link.linkType}>
                                                <a href={link.url} className='hover:text-white' aria-label={link.linkType}>{link.title}</a>
                                            </li>
                                        ))}

                                    </ul>
                                )}
                                <p>{speaker.tagLine}</p>
                                {speaker.sessions.map(session => (
                                    <h3>{session.name}</h3>
                                ))}

                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* <div className='m-10'>
                <a href={process.env.REACT_APP_SPEAKER_FORM_URL} className='text-white bg-Blue500 hover:text-white rounded-full text-md px-6 py-4'>Become a Speaker</a> 
            </div> */}
        </section>
    )
}

export default SpeakerProfiles;