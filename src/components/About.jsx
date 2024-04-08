import React from "react";
import Typed from 'typed.js';

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>web developer</i>', '<i>React developer</i>'],
      typeSpeed: 80,
      // shuffle: true,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://avatars.githubusercontent.com/u/77499509?v=4"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-violet-600">
              Mayuresh Kumbhar.  <br /> <span ref={el} className="text-red-400" />
            </h1>
            <p className="mb-8 leading-relaxed">
              About Mayuresh Welcome to codewithmayuresh.in, your gateway to
              innovative web solutions! I'm Mayuresh, a passionate and seasoned
              web developer dedicated to crafting immersive digital experiences
              that leave a lasting impression. With 3 years of experience in the
              ever-evolving realm of web development, I've honed my skills in a
              variety of programming languages, frameworks, and design
              principles. From front-end aesthetics to back-end functionality, I
              thrive on turning ideas into reality and bringing visions to life
              through code. My journey in web development began 3 years ago when
              I discovered my love for coding and design. Since then, I've had
              the privilege of working with clients from diverse industries,
              helping them elevate their online presence and achieve their
              business objectives. What sets me apart is my relentless pursuit
              of excellence and my commitment to staying ahead of the curve in
              an industry that's constantly evolving. Whether it's mastering the
              latest technologies, refining my design skills, or keeping up with
              emerging trends, I'm always eager to push the boundaries of what's
              possible in web development. But beyond the technicalities, what
              truly drives me is the opportunity to make a meaningful impact.
              Whether it's helping a small business thrive in the digital
              landscape or creating a seamless user experience for a global
              brand, I'm fueled by the challenge of creating solutions that
              exceed expectations and deliver tangible results. When I'm not
              immersed in lines of code or pushing pixels, you can find me
              exploring the great outdoors, indulging in a good book, or seeking
              inspiration in the vibrant tapestry of life. Thank you for
              visiting codewithmayuresh.in. Whether you're a fellow developer, a
              potential client, or simply curious about the world of web
              development, I invite you to join me on this exciting journey of
              innovation and creativity. Let's build something extraordinary
              together.
            </p>
            <div className="flex justify-center">
              <a href="https://github.com/mayuresh1007" target="_blank" className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">
                GitHub profile
              </a>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
