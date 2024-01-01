import React from "react";

const About = () => {
  return (
    <div
      name="bout"
      id="About"
      className="w-full h-auto md:h-screen bg-gradient-to-b from-gray-800 to-black text-white font-baloo"
    >
      <div className="max-w-[1300px] p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-3 sm:mt-20">
          Hey there! 👋 I'm Pradip Das, a dedicated computer engineer passionate
          about creating innovative digital experiences. My journey began in
          2019, where I honed my skills in programming languages and data
          structures. For two rewarding years at DON BOSCO INSTITUTE, I served
          as a Computer Assistant Teacher, mentoring students and fostering a
          deep understanding of languages like C, C++, and the intricacies of
          web development.
        </p>
        <br />
        <p className="text-xl">
          In mid-2023, I embarked on a new chapter in Bangalore, joining CADD
          NEST PVT LTD as an IT Instructor. Concurrently, I took on a part-time
          role at C.B. Bhandari Jain College, guiding BCA students in the realms
          of programming and web development. Beyond the classroom, I'm a
          hands-on creator, crafting web applications using a diverse tech stack
          including HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB,
          MySQL, and Firebase.
        </p>
        <br />
        <p className="text-xl">
          Driven by a passion for continuous learning, I stay abreast of the
          latest trends in web development. As you explore my portfolio, you'll
          witness my commitment to transforming ideas into functional and
          visually appealing digital solutions. Let's connect and explore the
          endless possibilities of what we can create together!
        </p>
      </div>
    </div>
  );
};

export default About;
