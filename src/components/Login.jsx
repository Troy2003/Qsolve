import React,{ useState} from "react";
import { Link } from "react-router-dom";



const Login = () => {
  
  const [name, setName] = useState('');

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-[50%] w-[80%] flex flex-col items-center justify-between">
          <div className="logo"></div>
          <p className="text-gray-700 text-2xl sm:text-3xl font-serif">
            Please enter your full name
          </p>
          <p className="text-green-700 text-2xl mx-2 sm:text-3xl font-serif">
            <a href="https://drive.google.com/file/d/1eVEkm72sFAuU53bhRXx-XqpEOK62WvTR/view?usp=sharing" target="_blank">Click here to know more</a>
          </p>
          <p className="text-gray-500 text-xl font-serif py-3">@yashbansod</p>

          <div className="w-full flex flex-col items-center h-[82%] justify-evenly">
            <input
              className="h-10 w-11/12 sm:w-8/12 lg:w-6/12 bg-transparent border-b-2 px-3  outline-none text-lg sm:text-xl font-bold text-gray-500 uppercase text-center"
              type="text"
              placeholder="ex@: Chandan Werulkar"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />

            <button
              className="text-white bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 px-6 py-2 rounded-md text-xl font-bold hover:bg-none hover:border hover:border-cyan-400 hover:text-cyan-400 font-['Poppins']"
              type="button" onClick={window.localStorage.setItem("name" , name)}
            >
              <Link to="/support">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
