import React, { useState } from "react";
import styles from "../../style";

function AnimateHTFT() {
  const [gifUrl, setGifUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function searchGif(concatenatedValues) {
    let url = "";
    if (concatenatedValues) {
      url = `https://s3.us-east-1.wasabisys.com/strangershq/HFTF/V1/finaltest_${concatenatedValues}.gif`;
    } else {
      url = "";
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
      img.alt = concatenatedValues || "Default GIF";
    }, 1000);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let concatenatedValues = "";
    formData.forEach((value) => {
      concatenatedValues += value;
    });
    searchGif(concatenatedValues);
    // Perform any necessary actions with concatenatedValues
  };

  return (
    <div class="flex flex-col md:flex-row md:justify-evenly md:h-[30rem] md:w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 class="whitespace-nowrap pt-0 text-4xl font-medium text-white">
          Select options
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center pt-10"
        >
          <select
            name="option1"
            class="mb-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1" class="text-[28px]">
              Torso_01
            </option>
            <option value="2" class="text-[28px]">
              Torso_02
            </option>
          </select>
          <select
            name="option2"
            class="mb-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1" class="text-[28px]">
              Right_Leg_01
            </option>
            <option value="2" class="text-[28px]">
              Right_Leg_02
            </option>
          </select>
          <select
            name="option3"
            class="mb-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1" class="text-[28px]">
              Right_Arm_01
            </option>
            <option value="2" class="text-[28px]">
              Right_Arm_02
            </option>
          </select>
          <select
            name="option4"
            class="mb-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1" class="text-[28px]">
              Left_Leg_01
            </option>
            <option value="2" class="text-[28px]">
              Left_Leg_02
            </option>
          </select>
          <select
            name="option5"
            class="mb-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1" class="text-[28px]">
              Left_Arm_01
            </option>
            <option value="2" class="text-[28px]">
              Left_Arm_02
            </option>
          </select>
          <select
            name="option6"
            class="mb-2 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1" class="text-[28px]">
              Head_01
            </option>
            <option value="2" class="text-[28px]">
              Head_02
            </option>
          </select>
          <select
            name="option7"
            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1" class="text-[28px]">
              Chest_01
            </option>
            <option value="2" class="text-[28px]">
              Chest_02
            </option>
          </select>
          <button
            type="submit"
            value="Submit"
            class="p-3 rounded-2xl text-2xl lg:text-3xl shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-12"
          >
            Submit
          </button>
        </form>
      </div>

      <div className={`md:pt-0 m-4 ${styles.flexCenter}`}>
        {errorMessage && <p>{errorMessage}</p>}
        <div
          className={`${styles.flexCenter} rounded-xl md:ml-48 md:w-[50rem] md:h-[50rem]`}
        >
          {isLoading && (
            <div className="pt-20">
              <div className={`loader ${styles.flexCenter}`}></div>
            </div>
          )}
          {gifUrl && <img className="rounded-xl" src={gifUrl} alt="GIF" />}
        </div>
      </div>
    </div>
  );
}

export default AnimateHTFT;
