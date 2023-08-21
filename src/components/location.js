import React from 'react';
import VenueImage from '../assets/2022/PG6.jpg';

const LocationSection = () => (
  <section className='my-20'>
    <h2 className='text-center'>Venue</h2>
    <div className='w-10/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
      <div className='mx-auto px-4'>
        <a
          href='https://goo.gl/maps/rYArwaGWq8tW533d9'
          target={'_blank'}
          rel='noreferrer'
        >
          <img
            src={VenueImage}
            className='rounded-2xl overflow-hidden'
            alt='Florida International University PG6 Tech Station'
          ></img>
        </a>
      </div>
      <div className='mx-auto px-4 text-center'>
        <p className='text-xl lg:text-left lg:pt-0'>
          We're excited to announce that DevFest{' '}
          {process.env.REACT_APP_CHAPTER_NAME} will take place at{' '}
          <span className='font-semibold'>
            Florida International University PG6 Tech Station
          </span>
        </p>

        <a
          href='https://goo.gl/maps/rYArwaGWq8tW533d9'
          className='hover:text-Blue500 lg:text-left'
          target={'_blank'}
          rel='noreferrer'
        >
          <p className='text-lg'>
            FIU PG6 Tech Station
            <br />
            11200 SW 8th St
            <br />
            Miami, FL 33199
          </p>
        </a>

        <p className='text-xl lg:text-left lg:pt-0'>
          Special thanks to{' '}
          <a href='https://www.fiu.edu/' target={'_blank'} rel='noreferrer'>
            <span className='font-semibold'>
              Florida International University
            </span>
            {', '}
          </a>{' '}
          <a href='https://upe.cs.fiu.edu/' target={'_blank'} rel='noreferrer'>
            <span className='font-semibold'>UPE</span>
          </a>
          {', '}
          and{' '}
          <a
            href='http://www.weareinit.org/'
            target={'_blank'}
            rel='noreferrer'
          >
            <span className='font-semibold'>INIT</span>{' '}
          </a>
          for sponsoring DevFest Florida on campus.
        </p>
      </div>
    </div>
    {/* <div className='w-10/12 sm:my-5 mx-auto grid grid-cols-1'>
      <div className='mx-auto px-4'>
          <img
            src={VenueMap}
            alt='DevFest Map'
            className='rounded-2xl overflow-hidden'
          ></img>
      </div>
    </div> */}
  </section>
);

export default LocationSection;