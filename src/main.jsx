import React from "react";
import ReactDOM from "react-dom/client";
import GeneralInfo from "./components/GeneralInfo.jsx";
import "./styles/index.css";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GeneralInfo />
        <Education />
        <Experience />
    </React.StrictMode>
);
