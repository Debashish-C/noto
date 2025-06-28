import React from "react";

export default function Todos() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="">
        <h2>Name</h2>
        <h5 className="text-[14px] text-cyan-800">Description</h5>
      </div>
      <div className="">
        <input type="checkbox" name="" id="" className="w-6 h-6" />
      </div>
    </div>
  );
}
