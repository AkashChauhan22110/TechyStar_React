import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            obcaecati unde beatae facere quaerat explicabo officia soluta,
            praesentium impedit eos recusandae dolorum debitis quisquam qui
            aliquid reprehenderit deleniti ipsum necessitatibus doloribus. Quis
            velit blanditiis, maiores libero, tempore quasi, qui in assumenda
            aliquam iusto debitis. Ipsa ullam, sint eum optio voluptatem a, sunt
            hic quibusdam obcaecati doloribus quam voluptas accusamus temporibus
            explicabo excepturi. Sit esse quibusdam, aliquid deserunt fugiat
            impedit modi placeat molestias at ipsa nisi.
          </p>
        </div>
      </div>

      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay:'0.3s',}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:'0.5s',}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:'0.7s',}}>
              <AiFillYoutube/> 
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:'1s',}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
