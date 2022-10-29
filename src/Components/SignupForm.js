import React, { useEffect, useState } from "react";
// import Inputfield from "./Widgets/Inputfield";
// import Button from "./Widgets/Button";
import Googlelogo from "../../src/Assets/Googlelogo.png";
import { BsArrowRight } from "react-icons/bs";
import Pocketful from "../../src/Assets/Pocketful.png";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/News");
    }
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password);
      navigate("/News");
    } catch (e) {}
  };
  return (
    <div className="bg-[#6249a3] flex h-screen justify-center items-center ">
      <div className=" bg-white w-full max-w-sm rounded-lg py-3 mx-2 lg:mx-0">
        <img className=" " src={Pocketful} alt="" />
        <h1 className="font-medium text-center">Welcome to Pocketful</h1>
        <p className="text-xs text-center">
          Lets log in to launch your Automation
        </p>
        <form>
          <div className="flex justify-center my-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className=" border-2 border-purple-300  p-2 w-80 rounded-md outline-none placeholder-black"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex justify-center my-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className=" border-2 border-purple-300   p-2 w-80 rounded-md outline-none placeholder-black"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* <div>
          <Inputfield name="email" placeholdename="Email Address" />
        </div>
        <div>
          <Inputfield name="password" placeholdename="Password" />
        </div> */}
          <div className="text-xs text-purple-500 font-medium flex  justify-between px-6 ">
            <p className="cursor-pointer">Create Account</p>
            <p className="cursor-pointer">Forgot Password?</p>
          </div>
          <div onClick={handleSubmit} className="flex justify-center my-3">
            <div className="bg-[#7758c6] hover:bg-purple-500 p-2 text-center  w-80 text-white rounded-md cursor-pointer">
              <button>Sign in</button>
            </div>
          </div>
        </form>
        <div onClick={handleGoogleSignIn} className="flex justify-center my-3">
          <div className="flex justify-between items-center p-2 shadow-sm shadow-purple-200 font-normal w-80 text-black rounded-md cursor-pointer">
            <div className="flex items-center space-x-2">
              <img className=" w-8 h-8" src={Googlelogo} alt="" />
              <button> Sign in with Google</button>
            </div>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
