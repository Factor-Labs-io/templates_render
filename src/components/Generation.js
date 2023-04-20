import React from "react";
import styles from "../style";
// import animate_nouns from "./scripts/animate_nouns";

const Generation = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:h-[30rem] md:w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="whitespace-nowrap pt-0 text-4xl font-medium text-white">
          Animate any nouns!
        </h1>
        <form
          id="search-form"
          className="flex flex-col justify-center items-center pt-10"
        >
          <input
            id="search-input"
            className="rounded-2xl placeholder:text-2xl text-3xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            min="0"
            max="674"
            name="num1"
            placeholder="Number 1"
          />
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

      <div className={`${styles.flexCenter}`}>
        <div id="gif-loader" className="loader-container">
          <div className="loader"></div>
        </div>

        <div id="gif-container">
          <img
            src="https://s3.us-east-1.wasabisys.com/nouns/images/static/74.gif"
            alt="Default GIF"
          />
        </div>
      </div>
    </div>
  );
};

export default Generation;
