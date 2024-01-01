import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import express from "../assets/express.png";
import github from "../assets/github.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/1611079.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      width: "w-[100px]",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      width: "w-[72px]",
    },
    {
      id: 3,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-500",
      width: "auto",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-700",
      width: "auto",
    },
    {
      id: 46,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
      width: "w-[120px]",
    },
    {
      id: 5,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
      width: "",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-700",
      width: "auto",
      height: "h-[50px]",
    },
    {
      id: 8,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-500 ",
      width: "w-[150px]",
    },
  ];

  return (
    <div
      name="xperience"
      id="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto md:h-screen "
    >
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center py-6 px-8 sm:px-0 ">
          {techs.map(({ id, src, title, style, width, height }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 px-4 py-2 rounded-lg ${style}`}
            >
              <img src={src} className={`w-20 h-[90px] mx-auto ${width}`} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
