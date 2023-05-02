import React, { useState } from "react";
import styles from "../style";

function AnimateNouns() {
  const [gifUrl, setGifUrl] = useState(
    "https://s3.us-east-1.wasabisys.com/nouns/images/static/74.gif"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function searchGif(searchTerm) {
    let url = "";
    if (searchTerm) {
      url = `https://s3.us-east-1.wasabisys.com/nouns/images/static/${searchTerm}.gif`;
    } else {
      url = "https://s3.us-east-1.wasabisys.com/nouns/images/static/74.gif";
    }

    setIsLoading(true);
    setGifUrl("");
    setErrorMessage("");

    setTimeout(() => {
      const img = new Image();
      img.onload = () => {
        setGifUrl(url);
        setIsLoading(false);
      };
      img.onerror = () => {
        setErrorMessage("Sorry, an error occurred while loading the GIF.");
        setIsLoading(false);
      };
      img.src = url;
      img.alt = searchTerm || "Default GIF";
    }, 500);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value.trim();
    searchGif(searchTerm);
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly md:h-[30rem] md:w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="whitespace-nowrap pt-0 text-4xl font-medium text-white">
          Animate any nouns!
        </h1>
        <form
          className="flex flex-col justify-center items-center pt-10"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-2xl placeholder:text-2xl text-3xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number"
            min="0"
            max="674"
            autocomplete="off"
            name="search"
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

      <div className={`md:pt-0 ${styles.flexCenter}`}>
        {errorMessage && <p>{errorMessage}</p>}
        <div className={`${styles.flexCenter} md:w-[32rem] md:h-[32rem]`}>
          {isLoading && (
            <div className="pt-20">
              <div className={`loader ${styles.flexCenter}`}></div>
            </div>
          )}
          {gifUrl && <img src={gifUrl} alt="GIF" />}
        </div>
      </div>
    </div>
  );
}

export default AnimateNouns;
