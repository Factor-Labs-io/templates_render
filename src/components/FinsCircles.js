import React, { useState } from "react";
// import styles from "../style";

const DrinksCircles = () => {
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
            className="rounded-2xl text-center placeholder:text-2xl text-3xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/5 md:w-2/12 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            min="0"
            max="674"
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
            Select a Drink
          </h1>

          <div className="w-full p-2 gap-3 flex flex-row overflow-x-scroll md:overflow-auto md:grid md:grid-cols-6">
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="merlot"
              src="https://i.ibb.co/j6S4ZMy/all-time-merlot-1.png"
              onClick={handleImageClick}
            />

            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="bandit"
              src="https://i.ibb.co/V311sPX/bandit-ipa-1.png"
              onClick={handleImageClick}
            />

            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="blocktini"
              src="https://i.ibb.co/9tndL8P/blocktini-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="bull run brut"
              src="https://i.ibb.co/cx6k6Md/bull-run-brut-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="downbad daquiri"
              src="https://i.ibb.co/3rRmkmh/downbad-daquiri-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="gm and tonic"
              src="https://i.ibb.co/nBSJ2kx/gm-and-tonic-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="grail"
              src="https://i.ibb.co/j3s6Xwc/grail-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="juicy brew"
              src="https://i.ibb.co/DKYy16c/juicy-brew-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="long island"
              src="https://i.ibb.co/59Z9hsD/long-island-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="metaverse mule"
              src="https://i.ibb.co/cxxB8sK/metaverse-mule-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="moonhattan"
              src="https://i.ibb.co/B3M1FRb/moonhattan-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="poopiecolada"
              src="https://i.ibb.co/VpTgY1h/poopiecolada-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="ruggarita"
              src="https://i.ibb.co/SmqQdMV/ruggarita-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="wagmi"
              src="https://i.ibb.co/hcS5L8Z/wagmi-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="water"
              src="https://i.ibb.co/wsQJ2Yg/water-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="wen mint"
              src="https://i.ibb.co/Gct6ZCM/wen-mint-1.png"
              onClick={handleImageClick}
            />
            <img
              className={`bg-gray-500 mt-4 rounded-full w-44 h-44 md:w-32 md:h-32 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="zaddy chill"
              src="https://i.ibb.co/VmGQtvD/zaddy-chill-1.png"
              onClick={handleImageClick}
            />
          </div>

          <div className="pt-10">
            <button
              type="submit"
              className="p-3 rounded-2xl text-3xl shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={`pt-4 text-center flex-col w-2/3 md:w-3/12 items-center`}>
        <p className={`text-white`}>{number}</p>
        <p className={`text-white`}>{selectedImg}</p>
      </div>
    </div>
  );
};

export default DrinksCircles;
