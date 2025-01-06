import React from "react";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header class="header">
      <Navbar />
      <Landing />
    </header>
  );
}
