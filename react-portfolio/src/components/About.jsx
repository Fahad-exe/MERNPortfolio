import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reiciendis placeat provident, temporibus unde porro ratione non
          reprehenderit repudiandae aperiam ab, vel quod architecto molestias
          minima fugiat itaque adipisci, dolorum sit vero facere molestiae.
          Repudiandae, porro praesentium. Ducimus, quidem? Esse quisquam enim
          eius ratione voluptate explicabo, assumenda iure corrupti
          consequuntur.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          quaerat! Enim nihil laudantium veritatis illo quisquam error expedita
          repellat cupiditate voluptas, reiciendis pariatur. Corrupti ipsum
          aperiam praesentium dignissimos eaque incidunt!
        </p>
      </div>
    </div>
  );
};

export default About;
