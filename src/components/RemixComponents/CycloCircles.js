import React, { useState } from "react";
import logo from "../../assets/logo.png";
// import styles from "../style";

const CycloCircles = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const number = event.target.elements.number.value;
    const img = selectedImg;
    setNumber(number);
    console.log(number, img);
  }

  function handleImageClick(event) {
    setSelectedImg(event.target.src);
  }

  return (
    <div className="pt-4 flex flex-col md:justify-evenly md:flex-row justify-center items-center">
      <div>
        <h1 className="text-center whitespace-nowrap text-3xl font-medium text-white">
          Enter Doodle Number
        </h1>
        <form
          className="flex flex-col justify-center items-center pt-10"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-2xl text-center placeholder:text-2xl text-3xl w-min bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/5 md:w-3/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            min="1"
            max="5000"
            autocomplete="off"
            name="number"
            placeholder="Number 1"
          />

          <div className={`p-6`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <h1 className="whitespace-nowrap pb-4 text-3xl font-medium text-white">
            Select a room
          </h1>

          <div className="w-full p-2 gap-3 justify-center flex flex-row overflow-x-scroll md:overflow-auto md:grid md:grid-cols-6">
            <img
              className={`bg-gray-500 mt-4 rounded w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="room"
              src="https://i.ibb.co/872C6Nb/room.png"
              onClick={handleImageClick}
            />
          </div>

          <div className="pt-10">
            <button
              type="submit"
              className="p-3 rounded-2xl text-3xl shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Remix
            </button>
          </div>
        </form>
      </div>
      <div
        className={`bg-gray-300 md:rounded pt-4 md:mt-48 my-8 rounded-3xl text-center flex-col w-2/3 md:w-3/12 items-center`}
      >
        <img src={logo} alt="Logo" className="md:w-[400px] md:h-[400px]" />
        {/* <p className={`text-black`}>{number}</p>
        <p className={`text-black`}>{selectedImg}</p> */}
      </div>
    </div>
  );
};

export default CycloCircles;
