import React from "react";
import VenueImage from "../assets/2023/WynwoodGateway.jpg";

const LocationSection = () => (
  <section className="my-20">
    <h2 className="text-center">Venue</h2>
    <div className="w-10/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto px-4">
        <a
          href="https://maps.app.goo.gl/PQghrQwh7MNjveVz8"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={VenueImage}
            className="rounded-2xl overflow-hidden"
            alt="Mindspace Wynwood"
          ></img>
        </a>
      </div>
      <div className="mx-auto px-4 text-center">
        <p className="text-xl lg:text-left lg:pt-0">
          We're excited to announce that DevFest{" "}
          {process.env.REACT_APP_CHAPTER_NAME} will take place at{" "}
          <span className="font-semibold">Mindspace Wynwood</span>
        </p>

        <a
          href="https://maps.app.goo.gl/PQghrQwh7MNjveVz8"
          className="hover:text-Blue500 lg:text-left"
          target={"_blank"}
          rel="noreferrer"
        >
          <p className="text-lg">
            Mindspace Wynwood
            <br />
            2916 N Miami Ave
            <br />
            Miami, FL 33127
          </p>
        </a>

        <p className="text-xl lg:text-left lg:pt-0">
          Special thanks to{" "}
          <a
            href="https://www.mindspace.me/l/miami-wynwood/"
            target={"_blank"}
            rel="noreferrer"
          >
            <span className="font-semibold">Mindspace Wynwood</span>
            {", "}
          </a>
          for sponsoring DevFest Miami.
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
