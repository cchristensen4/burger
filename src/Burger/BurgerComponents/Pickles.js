import React from "react";
import Classes from "./styles/Pickles.module.css";

export default function Pickles() {
  return (
    <div className={Classes.group}>
      <div className={Classes.Pickles}></div>
      <div className={Classes.Pickles}></div>
    </div>
  );
}