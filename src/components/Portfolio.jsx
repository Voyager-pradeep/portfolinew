// Portfolio.jsx
import React, { useEffect, useRef } from "react";
import thumbnail1 from "../assets/1.png";
import thumbnail2 from "../assets/2.png";
import thumbnail3 from "../assets/3.png";
import thumbnail4 from "../assets/4.png";
import thumbnail5 from "../assets/5.png";
import thumbnail6 from "../assets/6.png";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
import "./Portfolio.css"; // Import the CSS file

const createRefs = (length) => {
  return Array.from({ length }, () => useRef(null));
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: thumbnail1,
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7144253819156054016/",
      code: "https://github.com/Voyager-pradeep/MERNMessageapp",
    },
    {
      id: 2,
      src: thumbnail2,
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7139943567845720064/",
      code: "https://github.com/Voyager-pradeep/netflix",
    },
    {
      id: 3,
      src: thumbnail3,
      demo: "https://5ocial.netlify.app/",
      code: "https://github.com/Voyager-pradeep/socialmediaapp",
    },
    {
      id: 4,
      src: thumbnail4,
      demo: "https://voyagerfoodrecipe.netlify.app",
      code: "https://github.com/Voyager-pradeep/foodmenumain",
    },
    {
      id: 5,
      src: thumbnail5,
      demo: "https://voyagersnews.netlify.app/",
      code: "https://github.com/Voyager-pradeep/newsblog/tree/main/my%20news%20blog",
    },
    {
      id: 6,
      src: thumbnail6,
      demo: "https://voyagersquizapp.netlify.app/",
      code: "https://github.com/Voyager-pradeep/advanced-quiz-app/tree/main/mona%20quiz%20app",
    },
  ];

  const cardRefs = createRefs(portfolios.length);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [cardRefs]);

  return (
    <div
      id="Portfolio"
      name="Portfolio"
      className=" z-0 relative bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-[1300px] p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }, index) => (
            <div
              key={id}
              ref={cardRefs[index]}
              className="card-container opacity-0 transition-opacity duration-500 z-0 "
            >
              <img
                src={src}
                alt="my pic"
                className="rounded-md duration-300 hover:scale-105"
              />

              <div className="flex items-center justify-center  text-center ">
                <div className="flex items-center justify-center">
                  {id <= 2 ? (
                    <FaLinkedin size={20} color="white" />
                  ) : (
                    <FaGlobe size={20} color="white" />
                  )}
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 pl-[5px] pr-8 py-3 my-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                </div>
                <div>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-8 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
