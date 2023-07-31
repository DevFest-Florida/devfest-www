import React from "react";
import GoogleLogo from "../assets/2023/sponsors/Google_2015_logo@0.5x.png";
import USFLogo from "../assets/2023/sponsors/USF-Logo@0.5x.png";

const SponsorLogos = () => (
  <div className="text-center my-20">
    <h2>Sponsors</h2>
    <p>Thank you to our sponsors for their generous support.</p>

    <section className="my-20">
      <h3 className="my-10 font-semibold">Platinum</h3>
      <div className="">
        <img
          src={GoogleLogo}
          alt="Google Logo"
          className="object-contain h-56 w-3/4 md:w-full px-2 mx-auto"
        ></img>
      </div>

      <div className="">
        <img
          src={USFLogo}
          alt="University of South FLorida Logo"
          className="object-contain h-56 w-3/4 md:w-full px-2 mx-auto"
        ></img>
      </div>
    </section>



    {/* <section className="my-20">
      <h3 className="my-10 font-semibold">Gold</h3>
      <div className="">
        <a href="https://www.cobuildlab.com/" target="blank">
          <img
            src={Cobuild}
            alt="Cobuild Logo"
            className="object-contain h-32 w-3/4 md:w-full px-2 mx-auto"
          />
        </a>
      </div>
    </section>

    <section className="my-20">
      <h3 className="my-10 font-semibold">Silver</h3>
      <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 mx-auto">
        <div className="">
          <a href="https://www.bexrealty.com/" target="blank">
            <img
              src={BEXRealtyLogo}
              alt="BEX Realty Logo"
              className="object-contain h-56 w-full px-2"
            />
          </a>
        </div>
        <div className="">
          <a href="https://www.devintent.com/" target="blank">
            <img
              src={DevIntentLogo}
              alt="DevIntent Logo"
              className="object-contain h-56 w-full px-2"
            />
          </a>
        </div>
      </div>
    </section> */}

    {/* <section className="my-20">
      <h3 className="my-10 font-semibold">Bronze</h3>
      <div></div>
    </section> */}

    {/* <section className="my-20">
      <h3 className="my-10 font-semibold">Startup</h3>
      <div className="flex w-full h-full justify-center">
        <a href="https://www.google.com">
          <img
            src={GoogleLogo}
            alt=" Logo"
            className="object-contain h-36 w-full"
          ></img>
        </a>
      </div>
    </section> */}

    {/* <section>
      <h3 className="my-10 font-semibold">Supporters</h3>
      <div className="w-1/2 grid grid-cols-1 md:grid-cols-1 mx-auto">
        <div className="">
          <a
            href="http://www.weareinit.org/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={INITLogo}
              alt="INIT Logo"
              className="object-contain h-36 w-full px-2"
            ></img>
          </a>
        </div>
        <div className="">
          <a
            href="https://www.jetbrains.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={JetBrainsLogo}
              alt="JetBrains Logo"
              className="object-contain h-36 w-full px-2"
            ></img>
          </a>
        </div>
      </div>
    </section> */}

    <div className="m-16">
      <a
        href={"mailto:" + process.env.REACT_APP_DEVFEST_EMAIL}
        className="text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4 my-5"
      >
        Become a Sponsor
      </a>
    </div>
  </div>
);

export default SponsorLogos;
