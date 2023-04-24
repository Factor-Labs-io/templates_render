import React from "react";
// import styles from "../style";

const DrinksCircles = () => {
  function handleSubmit(event) {
    event.preventDefault();
    const number = event.target.elements.number.value;
    console.log(number);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="whitespace-nowrap pt-0 text-3xl font-medium text-white">
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

          <div className="w-full flex flex-row overflow-x-scroll md:overflow-auto md:grid md:grid-cols-6">
            <img
              className={`bg-gray-500 m-4 rounded-full w-44 h-44 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="merlot"
              src="https://i.ibb.co/j6S4ZMy/all-time-merlot-1.png"
              onclick="change(this.src)"
            />

            <img
              className={`bg-gray-500 m-4 rounded-full w-44 h-44 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="bandit"
              src="https://i.ibb.co/V311sPX/bandit-ipa-1.png"
              onclick="change(this.src)"
            />

            <img
              className={`bg-gray-500 m-4 rounded-full w-44 h-44 focus:outline-none focus:ring focus:ring-violet-300`}
              tabindex="1"
              alt="bandit"
              src="https://i.ibb.co/V311sPX/bandit-ipa-1.png"
              onclick="change(this.src)"
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
    </div>
  );
};

export default DrinksCircles;
