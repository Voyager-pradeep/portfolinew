import React from "react";
import HeroImg from "../assets/img.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      id="Home"
      name="Home"
      className=" pt-20 sm:pt-0 h-screen md:h-screen w-full bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="  max-w-[1300px] mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full w-50">
          <h2 className="text-2xl lg:w-[600px] sm:w-[500px] sm:text-7xl font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building and designing software.A
            passionate and dedicated web developer experience in creating
            user-friendly and visually appealing websites and web applications.
          </p>
          <div>
            <Link to="Portfolio" smooth duration={500}>
              <button className=" hidden sm:flex group text-white w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className=" my-4 rounded-2xl h-50 sm:h-auto w-2/3 mx-auto border-solid border-2 border-sky-500 "
            src={HeroImg}
            alt="my profile
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
