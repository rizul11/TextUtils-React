import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
        <Router>
        <Navbar title="TextUtils" aboutText="About us" themeMode={mode} toggleMode={toggleMode}/>

        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" themeMode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
