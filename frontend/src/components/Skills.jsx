import React from "react";

const Skills = () => {
  // const x = bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text
  return (
    <div className="mx-auto">
      <p className="text-left text-4xl font-bold text-white">Skills</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10 gap-x-0 gap-y-10 ml-10">
        <div className="flex flex-col items-center select-none">
          <img src="/html-5.png" alt="" className="h-20 w-20 mx-auto" />
          <p className="text-center text-sm mt-3 text-gray-300 font-medium">
            HTML
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/CSS.png" alt="" className="h-20 w-20 mx-auto" />
          <p className="text-center text-sm mt-3 text-gray-300 font-medium">
            CSS
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/js.png" alt="" className="h-20 w-20 mx-auto" />
          <p className="text-center text-sm mt-3 text-gray-300 font-medium">
            JAVASCRIPT
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/react.png" alt="" className="h-20 w-20 mx-auto" />
          <p className="text-center text-sm mt-3 text-gray-300 font-medium">
            REACT JS
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/node.png" alt="" className="h-20 w-20 mx-auto" />
          <p className="text-center text-sm mt-3 text-gray-300 font-medium">
            NODE JS
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/bootstrap.png" alt="" className="h-20 w-20 mx-auto" />
          <p className="text-center text-sm mt-3 text-gray-300 font-medium">
            BOOTSTRAP
          </p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
            alt=""
            className="h-20 w-20 mx-auto"
          />
          <p className="text-center mt-2 text-gray-300 font-normal">TAILWIND</p>
        </div>
        <div className="flex flex-col">
          <img
            src="Express.png"
            alt=""
            className="h-20 w-20 mx-auto fill-white"
          />
          <p className="text-center mt-2 text-gray-300 font-normal">
            EXPRESS JS
          </p>
        </div>
        <div className="flex flex-col">
          <img
            src="mongodb.png"
            alt=""
            className="h-20 w-20 mx-auto fill-white"
          />
          <p className="text-center mt-2 text-gray-300 font-normal">MONGODB</p>
        </div>
        <div className="flex flex-col">
          <img
            src="slack.png"
            alt=""
            className="h-20 w-20 mx-auto fill-white"
          />
          <p className="text-center mt-2 text-gray-300 font-normal">SLACK</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
