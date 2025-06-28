import { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./pages/Todo";
import Daily from "./components/Daily";
import Diary from "./pages/Diary";

function App() {
  return (
    <>
      <Navbar />
      <Diary />
    </>
  );
}

export default App;
