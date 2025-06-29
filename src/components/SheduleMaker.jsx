import React, { useState, useEffect } from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const generateTimeSlots = (gapInMinutes) => {
  const slots = [];
  let start = 8 * 60; // 8:00 AM
  const end = 20 * 60; // 8:00 PM

  while (start < end) {
    const hours = Math.floor(start / 60);
    const minutes = start % 60;
    const timeStr = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    slots.push(timeStr);
    start += gapInMinutes;
  }

  return slots;
};

export default function ScheduleMaker() {
  const [gap, setGap] = useState(60);
  const [schedule, setSchedule] = useState({});
  const [scheduleName, setScheduleName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const timeSlots = generateTimeSlots(gap);

  useEffect(() => {
    const saved = localStorage.getItem("scheduleData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSchedule(parsed.schedule || {});
      setScheduleName(parsed.name || "");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "scheduleData",
      JSON.stringify({ name: scheduleName, schedule })
    );
    setIsEditing(false);
    alert("Schedule saved!");
  };

  const handleCellClick = (day, time) => {
    if (!isEditing) return;
    const key = `${day}_${time}`;
    const entry = prompt(
      `Enter task for ${day} at ${time}`,
      schedule[key] || ""
    );
    if (entry !== null) {
      setSchedule((prev) => ({ ...prev, [key]: entry }));
    }
  };

  return (
    <div className="p-4 w-full">
      {/* Header */}
      <div className="mb-4 flex justify-between w-full">
        <div>
          <input
            type="text"
            value={scheduleName}
            onChange={(e) => setScheduleName(e.target.value)}
            placeholder="Name of The Schedule"
            className="pl-4 pr-4 p-2 rounded-md  mr-4"
            disabled={!isEditing}
          />
          {isEditing && (
            <>
              <label className="mr-2 font-semibold">Time Gap:</label>
              <select
                className="border p-2 rounded"
                value={gap}
                onChange={(e) => setGap(parseInt(e.target.value))}
              >
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>1 hour</option>
              </select>
            </>
          )}
        </div>

        <div>
          {isEditing ? (
            <button
              className="pl-4 pr-4 p-2 border rounded-md bg-green-500 text-white hover:bg-green-600"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="pl-4 pr-4 p-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {/* Schedule Table */}
      <div className="overflow-auto">
        <table className="min-w-full table-fixed border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 w-24 bg-gray-100">
                Time
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="border border-gray-300 p-2 bg-gray-100"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time}>
                <td className="border border-gray-300 p-2 text-sm text-center font-semibold bg-gray-50">
                  {time}
                </td>
                {days.map((day) => {
                  const key = `${day}_${time}`;
                  return (
                    <td
                      key={key}
                      className={`border border-gray-300 p-2 text-sm ${
                        isEditing ? "cursor-pointer hover:bg-blue-100" : ""
                      }`}
                      onClick={() => handleCellClick(day, time)}
                    >
                      {schedule[key] || ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
