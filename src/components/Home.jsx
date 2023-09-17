import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday.We are Leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            "TeachyStar is at the forefront of delivering exceptional IT
            services through our advanced web application. With a relentless
            commitment to innovation, we empower businesses with tailored
            solutions that redefine their digital landscape. Our seasoned
            experts specialize in a spectrum of services, from custom software
            development and cybersecurity fortification to seamless network
            optimization. We understand that in today's fast-paced world,
            staying ahead in the tech game is non-negotiable. That's why
            TeachyStar is here to not only meet but exceed your IT needs.
            Partner with us and unlock a future of boundless technological
            potential. Join the ranks of those who have already experienced the
            TeachyStar advantage, where excellence in IT is not just a service,
            but a promise."
          </p>
        </div>
      </div>

      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
