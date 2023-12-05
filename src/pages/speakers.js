import React from "react";
import SpeakerProfiles from "../components/speakers";

const Speakers = () => (
  <>
    {/* <div className="w-11/12 mx-auto my-10 grid grid-cols-1 lg:grid-cols-2">
      <div className="px-5 my-5">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/S6w5C9FJlIM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="z-0"
          ></iframe>
        </div>
      </div>
      <div className="px-5 my-5">
        <h1>Call for Speakers</h1>
        <p>
          We are looking for speakers for DevFest{" "}
          {process.env.REACT_APP_CHAPTER_NAME}! We are open to a variety of
          topics, with emphasis on topics of interest for early-mid career
          developers. Are you an amazing technologist with something awesome to
          share with the {process.env.REACT_APP_CHAPTER_NAME} tech community? We
          want to hear from you!
        </p>
        <p className="font-semibold my-10">
          Speakers from historically underrepresented groups in tech are
          encouraged to apply to speak at DevFest{" "}
          {process.env.REACT_APP_CHAPTER_NAME}.
        </p>
        <a
          href={process.env.REACT_APP_SPEAKER_FORM_URL}
          className="text-white bg-Blue500 hover:text-white focus:ring-4 focus:ring-Blue500 rounded-full text-md px-6 py-4 my-5"
        >
          Submit Your Tech Talk!
        </a>
      </div>
    </div> */}
    <SpeakerProfiles />
  </>
);

export default Speakers;
