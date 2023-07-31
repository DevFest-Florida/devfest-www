import React from 'react';
import VenueImage from "../assets/2023/sponsors/USF-Logo@0.5x.png";


const LocationSection = () => (
  <section className='my-20'>
    <h2 className='text-center'>Venue</h2>
    <div className='w-10/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
      <div className='mx-auto px-4'>
        <a
          href='https://goo.gl/maps/3dQRB947Le1mRGbq5'
          target={'_blank'}
          rel='noreferrer'
        >
          <img
            src={VenueImage}
            className='rounded-2xl overflow-hidden'
            alt='University of South Florida'
          ></img>
        </a>
      </div>
      <div className='mx-auto px-4 text-center'>
        <p className='text-xl lg:text-left lg:pt-0'>
          We're excited to announce that DevFest{' '}
          {process.env.REACT_APP_CHAPTER_NAME} will take place at the{' '}
          <span className='font-semibold'>
          University of South Florida
          </span>
        </p>

        <p className='text-xl lg:text-left lg:pt-0'>
          Special thanks to the{' '}
          <a href='https://www.usf.edu/' target={'_blank'} rel='noreferrer'>
            <span className='font-semibold'>
            University of South Florida
            </span>
            {', '}
          </a>{' '}
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
