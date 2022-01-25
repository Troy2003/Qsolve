import React from "react";
import Code from "./Code";
import Image from "./Image";

import domtoimage from "dom-to-image";
import data from "../Data";
import code from "../Code";

const Main = (propes) => {
 

  const {id } = propes;

  console.log(data);
  const download = () => {
    let node = document.getElementById("test");

    domtoimage.toJpeg(node, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "code.jpeg";
      link.href = dataUrl;
      link.click();
      link.remove();
    });
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-[85%] w-[95%] lg:w-[80%] flex flex-col items-center justify-between">
          <div className="logo"></div>
          <p className="text-gray-700 text-2xl text-center sm:text-3xl font-serif">
            Use a code to submit assignments and download a screenshot
          </p>
          <p className="text-gray-500 text-xl font-serif py-3">{data[id].aim}</p>

          <div className="w-full md:h-[80%] flex flex-col md:flex-row">
            <div className="w-full md:w-6/12 h-[30%] md:h-full border overflow-auto scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <Code code={code[id].code} />
            </div>

            <div className="flex flex-col w-full md:w-6/12 my-5 md:my-0 items-center border overflow-auto scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div id="test" className="border bg-white">
                <div className="h-[49px] w-[420px] flex">
                  <img src="/images/bell.png" alt="" />
                  <p className="w-[250px] text-md bg-white flex h-full uppercase text-cyan-500 justify-center items-center">
                    {window.localStorage.getItem("name")}
                  </p>
                  <img src="/images/User.png" alt="" />
                </div>
                <div className="w-[420px] flex justify-center items-center">
                 <Image  src={data[id].src}/>
                </div>
              </div>
              <button
                className="text-white text-md w-36 font-bold rounded-md py-2 my-4 bg-cyan-500"
                type="button"
                onClick={download}
              >
                Download Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
