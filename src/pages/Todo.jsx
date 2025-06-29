import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const todoTypes = ["Daily", "Weekly", "Monthly", "Yearly"];
const todoLevel = ["Most Important", "medium Important", "Less Important"];

export default function Todo() {
  const [modal, setModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [selectedType, setSelectedType] = useState("Daily");
  const [taskType, setTaskType] = useState("Daily");

  // Load from localStorage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add or Edit
  const handleAddOrEdit = () => {
    if (taskName.trim() === "") return;

    if (editId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId
            ? { ...todo, task: taskName, description, type: taskType }
            : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        task: taskName,
        description,
        type: taskType,
        done: false,
      };
      setTodos([newTodo, ...todos]);
    }

    setTaskName("");
    setDescription("");
    setTaskType("Daily");
    setModal(false);
  };

  // Delete
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Edit
  const handleEdit = (todo) => {
    setTaskName(todo.task);
    setDescription(todo.description);
    setTaskType(todo.type);
    setEditId(todo.id);
    setModal(true);
  };

  // Toggle Done
  const handleToggleDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Filter by selected tab type
  const filteredTodos = todos.filter((todo) => todo.type === selectedType);

  return (
    <div className="flex w-full pt-20 justify-center items-center">
      <div className="max-w-5xl w-full flex flex-col justify-center items-start p-4">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-bold">📝 TODO</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setModal(true);
              setTaskName("");
              setDescription("");
              setEditId(null);
              setTaskType("Daily");
            }}
            className="text-sm pl-5 pr-5 p-2 shadow-sm hover:shadow-md  border rounded-md"
          >
            + Add Todo
          </motion.button>
        </div>

        {/* Tabs */}
        <ul className="flex gap-4 mt-6 mb-4 text-md font-medium">
          {todoTypes.map((type) => (
            <li
              key={type}
              className={`cursor-pointer ${
                selectedType === type
                  ? "underline underline-offset-4 text-blue-700"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </li>
          ))}
        </ul>

        {/* Todo List */}
        <ul className="w-full flex flex-col gap-4">
          {filteredTodos.length === 0 && (
            <p className="text-gray-400">No {selectedType} tasks yet.</p>
          )}
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-start bg-gray-100 rounded-xl p-4"
            >
              <div className="flex items-start gap-3 w-full">
                <button
                  onClick={() => handleToggleDone(todo.id)}
                  className="mt-1 text-xl"
                >
                  {todo.done ? "✅" : "☐"}
                </button>
                <div className="flex flex-col w-full">
                  <h2
                    className={`font-semibold text-lg ${
                      todo.done ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.task}
                  </h2>
                  <p
                    className={`text-sm ${
                      todo.done ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 ml-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-sm hover:text-blue-600"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-sm hover:text-red-600"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Add/Edit */}
      {modal && (
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          className="fixed flex justify-center items-center flex-col w-full bottom-0 left-0 bg-white shadow-2xl p-6 z-50"
        >
          <div className="max-w-3xl w-full flex justify-between items-center mb-4">
            <h1 className="font-semibold text-xl">
              {editId ? "Edit Todo" : "Add Todo"}
            </h1>
            <button
              onClick={() => {
                setModal(false);
                setTaskName("");
                setDescription("");
                setEditId(null);
              }}
              className="text-xl p-2 bg-blue-100 rounded-xl hover:bg-amber-200"
            >
              ✖️
            </button>
          </div>

          <div className="max-w-3xl w-full flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name Of Task"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="p-2 px-4 rounded-md border w-full"
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 px-4 rounded-md border w-full"
            />
            <select
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
              className="p-2 rounded-md border text-sm"
            >
              {todoTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
              className="p-2 rounded-md border text-sm"
            >
              {todoLevel.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddOrEdit}
              className="p-2 px-4 bg-black text-white font-medium rounded-md"
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
