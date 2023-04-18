import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-2 border-white flex flex-row justify-between">
      <a href="/">
        <img
          src="https://i.ibb.co/2cCbLyQ/island-labs-FAW-03-1.jpg"
          width="140"
          height="140"
          alt="Factor Labs"
        />
      </a>
      <h1 className="text-white inline-block align-middle">Templates</h1>
      <h1 className="text-white">Twitter Link</h1>
    </nav>
  );
};

export default Navbar;
