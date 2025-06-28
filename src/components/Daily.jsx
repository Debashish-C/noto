import React from "react";
import Todos from "./Todos";

export default function Daily() {
  return (
    <div className="max-w-5xl flex flex-col gap-4 pt-5 justify-center w-full items-center">
      <Todos />
      <Todos />
      <Todos />
      <Todos />
    </div>
  );
}
