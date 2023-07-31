import React from 'react';
import VenueMap from '../assets/2023/sponsors/maps.seminolestate.edu.png';
import VenueImage from "../assets/2023/sponsors/up.jpeg";

const LocationSection = () => (
  <section className='my-20'>
    <h2 className='text-center'>Venue</h2>
    <div className='w-10/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
      <div className='mx-auto px-4'>
        <a
          href='https://goo.gl/maps/LXtoPLKqmNpmh6VZ7'
          target={'_blank'}
          rel='noreferrer'
        >
          <img
            src={VenueImage}
            className='rounded-2xl overflow-hidden'
            alt='Seminole State College Wayne M. Densch Partnership Center'
          ></img>
        </a>
      </div>
      <div className='mx-auto px-4 text-center'>
        <p className='text-xl lg:text-left lg:pt-0'>
          We're excited to announce that DevFest{' '}
          {process.env.REACT_APP_CHAPTER_NAME} will take place at{' '}
          <span className='font-semibold'>
          Seminole State College Wayne M. Densch Partnership Center
          </span>
        </p>

        <a
          href='https://goo.gl/maps/LXtoPLKqmNpmh6VZ7'
          className='hover:text-Blue500 lg:text-left'
          target={'_blank'}
          rel='noreferrer'
        >
          <p className='text-lg'>
          Seminole State College Wayne M. Densch Partnership Center
            <br />
            100 Weldon Blvd
            <br />
            Sanford, FL 32773
          </p>
        </a>

        <p className='text-xl lg:text-left lg:pt-0'>
          Special thanks to{' '}
          <a href='https://www.seminolestate.edu/' target={'_blank'} rel='noreferrer'>
            <span className='font-semibold'>
            Seminole State College
            </span>
            {', '}
          </a>{' '}
          for sponsoring DevFest Florida on campus.
        </p>
      </div>
    </div>
    <div className='w-10/12 sm:my-5 mx-auto grid grid-cols-1'>
      <div className='mx-auto px-4'>
          <img
            src={VenueMap}
            alt='DevFest Map'
            className='rounded-2xl overflow-hidden'
          ></img>
      </div>
    </div>
  </section>
);

export default LocationSection;
