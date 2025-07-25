import React from "react";

const Project = () => {
  return (
    <div>
      <p className="text-left text-4xl text-white font-bold">My Works</p>
      <div className="mt-10 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center md:place-items-start">
        <a href="#" target="blank">
          <div className="w-80 bg-gradient-to-r from-slate-900 to-gray-950 py-7 px-14 rounded">
            <p className="text-center text-white font-bold text-lg">
              Buddha Dana Udhyog
            </p>
            <img src="/bdu.jpeg" className="mx-auto rounded h-64 mt-3" alt="" />
            <p className="mx-auto text-center text-gray-300 text-sm font-medium mt-3 w-44">
              This is a website project of a company Buddha Dana Udhyog. I have
              been working on it all by myself using React JS for the frontend
              and node express for the backend.
            </p>
          </div>
        </a>
        <a href="https://twitter-landing-page-frdq.vercel.app/" target="blank">
          <div className="w-80 bg-gradient-to-r from-slate-900 to-gray-950 py-7 px-14 rounded">
            <p className="text-center text-white font-bold text-lg">
              Twitter Clone
            </p>
            <img src="/twitter.jpeg" className="mx-auto rounded mt-3" alt="" />
            <p className="mx-auto text-center text-gray-300 text-sm font-medium mt-3 w-44">
              This is the clone of the landing page of the twitter I made using
              simple HTML and Bootstrap as a framework of CSS.
            </p>
          </div>
        </a>
        <a
          href="https://youtube-clone-1npfp41qq-aaditya-064s-projects.vercel.app/"
          target="blank"
        >
          <div className="w-80 bg-gradient-to-r from-slate-900 to-gray-950 py-7 px-14 rounded">
            <p className="text-center text-white font-bold text-lg">
              YouTube Clone
            </p>
            <img src="/youtube.jpeg" className="mx-auto rounded mt-3" alt="" />
            <p className="mx-auto text-center text-gray-300 text-sm font-medium mt-3 w-44">
              This is the clone of the landing page of youtube I made using
              simple HTML and Bootstrap as a framework of CSS.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
