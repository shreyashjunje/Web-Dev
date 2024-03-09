import React from "react";
import "./spinner.css";

export default function () {
  return (
    <div className="flex justify-center items-center flex-col">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
