import React from "react";
import Entry from "../components/Entry";
import Calendar from "../components/Calender";

export default function Diary() {
  return (
    <div className="flex w-full pt-30 justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold">Diary</h1>
          <button className="pl-3 pr-3 p-2 bg-blue-100 text-[14px] rounded-2xl">
            New Entry
          </button>
        </div>
        <div className="pt-8 pb-8">
          <Calendar />
        </div>
        <div className="w-full text-start">
          <h1 className="text-2xl pb-4 font-bold">Entries</h1>
        </div>
        <div className="flex flex-col w-full gap-4 justify-start items-start">
          <Entry />
          <Entry />
          <Entry />
          <Entry />
          <Entry />
        </div>
      </div>
    </div>
  );
}
