import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import style from "../firstblock.module.css";

export default function FirstBlock() {
  return (
    <div className={style.background}>
      <NavBar />
      <Header />
    </div>
  );
}
