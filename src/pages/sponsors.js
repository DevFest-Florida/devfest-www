import React from "react";
import SponsorLogos from "../components/sponsors.js";

const Sponsors = () => (
  <section>
    <SponsorLogos />
    {/* <div className="w-11/12 mx-auto my-10 grid grid-cols-1 lg:grid-cols-2"> */}
    <div className="w-11/12 mx-auto my-10 grid grid-cols-1">
      <div className="px-5 my-5">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/1c6rdyIJPtLG7wxdBM8McWdH-g8wNFp-JVjoLKjNudYw/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="960"
            height="569"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            title="DevFest Sponsor Packages - GDG {process.env.REACT_APP_CHAPTER_NAME}"
          ></iframe>
        </div>
      </div>
      <div className="px-5 my-5">
        <h2>Why Sponsor DevFest {process.env.REACT_APP_CHAPTER_NAME}?</h2>
        <p className="my-10 text-lg">
          <span className="font-semibold">Technical Recruiting:</span> DevFest{" "}
          {process.env.REACT_APP_CHAPTER_NAME} is a great opportunity to meet
          emerging talent in the {process.env.REACT_APP_CHAPTER_NAME} tech
          industry.
        </p>
        <p className="my-10 text-lg">
          <span className="font-semibold">
            Brand Recognition/Product Exposure:
          </span>{" "}
          Expand your brand presence and expose attendees, partners, and press
          to your company, product, or API.
        </p>
        <p className="my-10 text-lg">
          <span className="font-semibold">
            Support the {process.env.REACT_APP_CHAPTER_NAME} Tech Community:
          </span>{" "}
          We are excited to be a part of the growing tech community in{" "}
          {process.env.REACT_APP_CHAPTER_NAME}. Join us!
        </p>
        <a
          href={"mailto:" + process.env.REACT_APP_DEVFEST_EMAIL}
          className="text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4 my-5"
        >
          Become a Sponsor
        </a>
        <a href={process.env.REACT_APP_CALL_FOR_SPONSORS} className='block font-semibold hover:text-Blue500 my-10'>Download Sponsor Packages</a>
      </div>
    </div>
  </section>
);

export default Sponsors;
