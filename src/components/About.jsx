import React from "react";
import Typed from "typed.js";

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "&lt;<i>web developer /</i>&gt;",
        "&lt; <i>React developer /</i>&gt;",
      ],
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
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src="https://avatars.githubusercontent.com/u/77499509?v=4"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-violet-600">
              &lt; Mayuresh Kumbhar. /&gt; <br />{" "}
              <span ref={el} className="text-red-400" />
            </h1>
            <p className="mb-4 leading-relaxed font-bold ">
              Mayuresh, a skilled web developer, creates stunning websites and
              digital experiences that captivate users and leave a lasting
              impression. With 3 years of experience, Mayuresh excels in various
              programming languages and design principles, from front-end
              aesthetics to back-end functionality. Dedicated to excellence,
              Mayuresh stays ahead of industry trends and constantly pushes the
              boundaries of web development. Passionate about making a
              meaningful impact, Mayuresh helps businesses thrive online and
              delivers exceptional user experiences. Explore CodeWithMayuresh.in
              for innovative web solutions and join Mayuresh on an exciting
              journey of creativity and innovation.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/mayuresh1007"
                target="_blank"
                className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 mb-10 focus:outline-none hover:bg-violet-600 rounded text-lg"
              >
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
