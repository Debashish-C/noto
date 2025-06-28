import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 pl-10 pr-10 fixed border-b-[0.3px] border-black w-full">
      <div className="">
        <h2 className="font-bold font-serif">NOTO</h2>
      </div>
      <div className="">
        <ul className="flex text-[14px] justify-around  items-center  gap-16">
          <Link to="/" className="hover:underline hover:text-amber-700">
            Tasks
          </Link>
          <Link className="hover:underline hover:text-amber-700" to="/diary">
            Diary
          </Link>
          <Link className="hover:underline hover:text-amber-700" to="/planner">
            Schedule
          </Link>
          <Link className="hover:underline hover:text-amber-700" to="/activity">
            Activity
          </Link>
          <Link className="hover:underline hover:text-amber-700" to="/settings">
            Settings
          </Link>
        </ul>
      </div>
    </nav>
  );
}
