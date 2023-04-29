import styles from "../style";
import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";

import { Dashboard } from "../components";

// class PFPComparepage extends Component {
function PFPComparepage() {
  const [handle, setHandle] = useState("");
  const [token_id, setToken_id] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/v1/pfptracking",
        { handle, token_id },
        { headers: { "Content-Type": "application/json" } }
      );
      setData(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the data");
    }
  };

  return (
    <div className="bg-primary w-full min-h-screen flex md:flex-row md:justify-between flex-col">
      <div>
        <Dashboard />
      </div>

      <div className={`md:w-10/12 flex-col`}>
        <div
          className={`${styles.heading2} ${styles.flexCenter} pt-5 flex-col`}
        >
          <h1>PFP Compare</h1>
          <h2>Project Name: StrangersHQ</h2>
        </div>

        <div className="flex flex-row items-center justify-between mr-10 mt-40">
          <form
            className={`ml-10 ${styles.heading2} text-center w-min`}
            onSubmit={handleSubmit}
          >
            <h1 className="p-4">Information</h1>
            <div className={`${styles.flexCenter}`}>
              <h2 className="whitespace-nowrap p-4">Twitter handle:</h2>
              <input
                className="text-center placeholder:text-xl text-xl bg-gray-200 appearance-none border-2 border-gray-200 w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                autocomplete="off"
                name="handle"
                placeholder="@insert"
                value={handle}
                onChange={(event) => setHandle(event.target.value)}
              />
            </div>

            <div className={`flex items-end ${styles.flexEnd}`}>
              <h2 className="whitespace-nowrap p-4">Enter Token ID:</h2>
              <input
                className="text-center placeholder:text-xl text-xl bg-gray-200 appearance-none border-2 border-gray-200 w-48 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                min="1"
                max="5000"
                autocomplete="off"
                name="token_id"
                placeholder="####"
                value={token_id}
                onChange={(event) => setToken_id(event.target.value)}
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="rounded-xl text-xl shadow bg-[#11b8aa] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
              >
                Check
              </button>
            </div>

            <div>
              <h1 className={`pt-8 ${styles.heading2}`}>Result:</h1>
              {error && <p>{error}</p>}
              {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
          </form>

          <div className="bg-gray-300 rounded flex flex-col justify-between">
            <h1 className={`${styles.heading2} bg-primary text-center pb-2`}>
              NFT Image
            </h1>
            <img src={logo} alt="Logo" className="w-[400px] h-[400px]" />
          </div>

          <div className="bg-gray-300 rounded flex flex-col justify-between">
            <h1 className={`${styles.heading2} bg-primary text-center pb-2`}>
              Twitter Image
            </h1>
            <img src={logo} alt="Logo" className="w-[400px] h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PFPComparepage;
