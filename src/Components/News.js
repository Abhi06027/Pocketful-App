import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Newsitems from "./Newsitems";
const News = () => {
  const [users, serUsers] = useState([]);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f23846ddb56479f814e843d7a4a309c`
      );
      serUsers(response.data.articles);
      console.log(response);
    };

    getUsers();
  }, []);

  function handleNextClick(e) {
    console.log("Next");
  }
  function handlePreviousClick(e) {
    console.log("Previous");
  }

  return (
    <div className="my-3">
      <h1 className="text-center text-black text-4xl font-semibold font-dm mt-10 uppercase ">
        Top Headlines
      </h1>
      <div className=" items-center text-black text-sm font-semibold font-dm  uppercase  text-right my-4  pr-6  ">
        {/* <p>User Email : {user && user.email}</p> */}
        <button onClick={handleLogout}> Log Out</button>
      </div>
      <div className=" flex justify-center  mx-5">
        <div className="grid gap-10  grid-cols-1 md:grid-cols-2   lg:grid-cols-3">
          {users.map((curElem) => {
            return (
              <div>
                <Newsitems
                  title={curElem.title.slice(0, 45)}
                  description={curElem.description}
                  Imgsrc={curElem.urlToImage}
                  url={curElem.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-around my-5">
        <button
          className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>

        <button
          type="button"
          className="bg-blue-600 rounded-md text-white  px-4 hover:bg-blue-700"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
