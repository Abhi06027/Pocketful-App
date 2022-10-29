import React from "react";
import Inputfield from "../Components/Widgets/Inputfield";
import Button from "../Components/Widgets/Button";
import Googlelogo from "../../Assets/Googlelogo.png";
import { BsArrowRight } from "react-icons/bs";
import Pocketful from "../../Assets/Pocketful.png";
const SignupForm = (props) => {
  return (
    <form className="bg-[#6249a3] flex h-screen justify-center items-center ">
      <div className=" bg-white w-full max-w-sm rounded-lg py-3 mx-2 lg:mx-0">
        <img className=" " src={Pocketful} alt="" />
        <h1 className="font-medium text-center">Welcome to Pocketful</h1>
        <p className="text-xs text-center">
          Lets log in to launch your Automation
        </p>
        <div>
          <Inputfield name="email" placeholdename="Email Address" />
        </div>
        <div>
          <Inputfield name="password" placeholdename="Password" />
        </div>
        <div className="text-xs text-purple-500 font-medium flex  justify-between px-6 ">
          <p className="cursor-pointer">Create Account</p>
          <p className="cursor-pointer">Forgot Password?</p>
        </div>
        <div className="flex justify-center my-3">
          <div className="bg-[#7758c6] p-2 text-center  w-80 text-white rounded-md cursor-pointer">
            <Button name="Sign in" />
          </div>
        </div>
        <div className="flex justify-center my-3">
          <div className="flex justify-between items-center p-2 shadow-sm shadow-purple-200 font-normal w-80 text-black rounded-md cursor-pointer">
            <div className="flex items-center space-x-2">
              <img className=" w-8 h-8" src={Googlelogo} alt="" />
              <Button name="Sign in with Google" />
            </div>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;

{
  /* <div>
<input
  type="password"
  id="fname"
  placeholder="Password"
  name="password"
/>
</div> */
}
