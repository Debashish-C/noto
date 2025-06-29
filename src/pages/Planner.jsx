import React from "react";
import { motion } from "motion/react";
import SheduleMaker from "../components/SheduleMaker";
export default function Planner() {
  return (
    <div className="flex w-full pt-30 justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col justify-center items-start">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl font-bold">Schedule</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-[14px] pl-4 pr-4 rounded-md shadow-sm hover:shadow-md border p-2 "
          >
            {" "}
            + Add New
          </motion.button>
        </div>
        <div className="w-full pt-10">
          <SheduleMaker />
        </div>
      </div>
    </div>
  );
}
