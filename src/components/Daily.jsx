import React from "react";
import Todos from "./Todos";

export default function Daily() {
  return (
    <div className="max-w-5xl flex flex-col gap-4 pt-5 justify-center w-full items-center">
      <Todos />
      <Todos />
      <Todos />
      <Todos />
      <div className="w-full flex justify-end p-5">
        <button className="text-3xl p-4 pt-2 pb-2 bg-cyan-400  hover:shadow-2xl hover:shadow-amber-500 shadow-cyan-300 hover:bg-amber-400 border-black shadow-xl text-center rounded-2xl">
          +
        </button>
      </div>
    </div>
  );
}
