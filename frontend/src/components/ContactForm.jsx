import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const ContactForm = () => {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    // console.log(info);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      url: "https://portfolio-org.onrender.com/add/client",
      method: "post",
      data: info,
    })
      .then((response) => {
        console.log("Client added successfully:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error adding client:",
          error.response ? error.response.data : error.message
        );
      });
    setInfo({
      first_name: "",
      last_name: "",
      email_address: "",
      company_name: "",
      contact_number: "",
      type_of_company: "",
      type_project: "",
      topic_elaboration: "",
    });
  };
  return (
    <div className="bg-gradient-to-r from-slate-800 to-indigo-900 pt-4 pb-2 px-2 overflow-hidden min-h-screen">
      <div className="flex flex-col max-w-[1150px] mx-auto">
        <Navbar />
        <div className="mt-10 flex-grow">
          <div className="relative">
            {/* <img
              src="https://imgs.search.brave.com/zVd0LQ6ocJc8_T6xFYI5ggg5Jd1GZ5nVICSlOQVlTb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzEyLzAzLzEx/LzM2MF9GXzgxMjAz/MTEyNl9LQWxyREFn/bHFrTjZYMnQzRFpu/eTdVRVpOaFRWb2py/Vi5qcGc"
              className="w-full h-96 object-cover blur-sm"
              alt=""
            /> */}
            <div className="mx-auto  rounded w-4/5">
              <p className="font-bold text-4xl text-center p-5 connect_text text-[#ffcb6c]">
                Let's Connect
              </p>
              <div className="p-5 md:w-3/5 mx-auto rounded">
                <form
                  action=""
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <p className="text-center text-gray-300 font-medium text-2xl enter_details">
                    Enter the Details
                  </p>
                  <div className="flex flex-col md:flex-row justify-between mt-4">
                    <input
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={info.first_name}
                      placeholder="First Name"
                      name="first_name"
                      className="shadow-lg p-2 mt-2 rounded md:w-[49%]"
                    />
                    <input
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={info.last_name}
                      name="last_name"
                      placeholder="Last Name"
                      className="shadow-lg p-2 mt-2 rounded md:w-[49%]"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row justify-between">
                    <input
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={info.contact_number}
                      name="contact_number"
                      placeholder="Contact Number"
                      className="shadow-lg p-2 mt-2 rounded md:w-[49%]"
                    />
                    <input
                      type="email"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={info.email_address}
                      name="email_address"
                      placeholder="Email Address"
                      className="shadow-lg p-2 mt-2 rounded md:w-[49%]"
                    />
                  </div>
                  <input
                    type="text"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="company_name"
                    value={info.company_name}
                    placeholder="Company Name"
                    className="shadow-lg p-2 mt-2 rounded w-full"
                  />
                  <select
                    name="type_of_company"
                    value={info.type_of_company}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    id=""
                    className="outline-none mt-2 w-full p-2 rounded"
                  >
                    <option value="null">Type of Company</option>
                    <option value="IT Consulting" className="text-black">
                      IT Consulting
                    </option>
                    <option value="Software Development" className="text-black">
                      Software Development
                    </option>
                    <option value="Other" className="text-black">
                      Other
                    </option>
                  </select>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    value={info.type_project}
                    type="text"
                    placeholder="Type of Project"
                    name="type_project"
                    className="shadow-lg p-2 mt-2 rounded w-full"
                  />
                  <textarea
                    name="topic_elaboration"
                    value={info.topic_elaboration}
                    id=""
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Elaborate the Topic"
                    className="shadow-lg p-2 mt-2 rounded w-full"
                  ></textarea>
                  <button className="bg-white px-4 py-2 border border-white rounded hover:bg-transparent hover:text-white transition-all active:opacity-50">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactForm;
