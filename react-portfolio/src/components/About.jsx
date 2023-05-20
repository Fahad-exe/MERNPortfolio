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
          My name is Fahad Matlagitu, and I recently graduated from Plymouth
          University with a degree in Computer Science, specializing in Game
          Development. During my studies, I had the opportunity to work on
          full-stack web development projects which piqued my interest,
          especially MERN stack, which has given me a solid foundation in
          creating full-stack web applications.
        </p>
        <br />
        <p className="text-xl">
          I have experience with JavaScript, including popular libraries such as
          React and Node.js. Additionally, I am always eager to learn new
          technologies and am currently exploring Kotlin as my next programming
          language of interest. As a passionate learner and driven individual, I
          am excited about contributing my skills and knowledge to your company.
          Thank you for considering my application.
        </p>
      </div>
    </div>
  );
};

export default About;
