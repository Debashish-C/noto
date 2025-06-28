import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Todo from "./pages/Todo.jsx";
import Navbar from "./components/Navbar.jsx";
import Diary from "./pages/Diary.jsx";
import Planner from "./pages/Planner.jsx";
import Settings from "./pages/Settings.jsx";
import Activity from "./pages/Activity.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Todo />} />
        <Route path="diary" element={<Diary />} />
        <Route path="planner" element={<Planner />} />
        <Route path="activity" element={<Activity />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
