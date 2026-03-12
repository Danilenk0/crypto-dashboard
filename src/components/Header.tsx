import { useState } from "react";
import profilePic from "../assets/images.jpeg";

const Header = () => {
  const [isNotification, setIsNotification] = useState(true);
  return (
    <header className="flex items-center p-5 w-full justify-between">
      <h1 className="text-3xl text-white">Dashboard</h1>
      <form className="w-1/3">
        <div className="flex items-center bg-base-black w-full rounded-xl px-3 py-2 gap-2 border-2 border-base-black  focus-within:border-base-blue">
          <input
            aria-label="search"
            className="text-base-gray flex-1 outline-none"
            type="text"
            placeholder="Search.."
          />
          <button type="submit" className="text-base-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="flex items-center gap-7.5">
        <button className="p-2 bg-base-black text-base-gray rounded-xl relative">
          {isNotification && (
            <div className="absolute w-1.5 h-1.5 bg-[#F46D22] rounded-full border border-white left-5.75"></div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
        <div className="flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={profilePic}
              alt="User profile picture"
            />
          </div>
          <p className="text-white">Mihail Danilenko</p>
          <button className="text-base-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
