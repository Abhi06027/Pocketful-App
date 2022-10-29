import React from "react";
// import kids from "../assets/kids.jpg";
// import happy from "../assets/happy.mp4";
// import ReactPlayer from "react-player";
// import "./Newsitems.css";

const Newsitems = (props) => {
  return (
    <>
      <div>
        <div>
          {/* <div className="bg-white shadow-md  rounded-lg w-[300px] h-[600px] overflow-y-scroll scrollbar-hide  "> */}
          <div className="bg-white shadow-md  rounded-lg w-[300px]  overflow-y-scroll scrollbar-hide ">
            <img
              className="rounded-t-lg w-full h-52 object-cover"
              src={props.Imgsrc}
              alt=""
            />

            <div className="p-4">
              <h2 className="text-lg font-medium">{props.title}...</h2>
              <p>{props.description}...</p>
              <button className="my-5">
                <a
                  href={props.url}
                  className="bg-blue-600 rounded-md text-white p-2 hover:bg-blue-700 "
                >
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsitems;
