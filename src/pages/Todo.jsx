import React from "react";
import Daily from "../components/Daily";

export default function Todo() {
  return (
    <div className="flex w-full pt-30 justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col justify-center items-start">
        <div className="">
          <h1 className="text-2xl font-bold">TODO</h1>
        </div>
        <div className="flex justify-start w-full  items-center">
          <ul className="flex justify-start items-center gap-6 pt-4">
            <li className="hover:underline">Daily</li>
            <li className="hover:underline">Weakly</li>
            <li className="hover:underline">Monthly</li>
            <li className="hover:underline">Yearly</li>
          </ul>
        </div>
        <Daily />
      </div>
    </div>
  );
}
