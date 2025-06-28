import React from "react";
import dayjs from "dayjs";

const days = ["S", "M", "T", "W", "T", "F", "S"];

function generateMonth(year, month) {
  const startDate = dayjs().year(year).month(month).startOf("month");
  const endDate = dayjs().year(year).month(month).endOf("month");
  const daysArray = [];

  let current = startDate.startOf("week");
  while (current.isBefore(endDate.endOf("week"))) {
    daysArray.push(current);
    current = current.add(1, "day");
  }

  return daysArray;
}

function MonthView({ year, month }) {
  const daysInMonth = generateMonth(year, month);
  const monthName = dayjs().year(year).month(month).format("MMMM YYYY");

  return (
    <div className="w-full max-w-sm p-4  rounded-lg  bg-white text-black">
      <h2 className="text-xl font-bold pb-5 text-center">{monthName}</h2>
      <div className="grid grid-cols-7 text-center text-sm font-semibold">
        {days.map((d) => (
          <div className="pl-3 pr-3" key={d}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center mt-2">
        {daysInMonth.map((date, idx) => (
          <div
            key={idx}
            className={`py-1 ${date.month() !== month ? "text-gray-400" : ""}`}
          >
            {date.date()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Calendar() {
  const today = dayjs();
  const year = today.year();
  const currentMonth = today.month();
  const nextMonth = today.add(1, "month").month();
  const nextMonthYear = today.add(1, "month").year();

  return (
    <div className="flex w-full gap-4 justify-around p-4  items-center">
      <MonthView year={year} month={currentMonth} />
      <MonthView year={nextMonthYear} month={nextMonth} />
    </div>
  );
}
