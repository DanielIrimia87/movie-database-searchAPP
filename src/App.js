import React from "react";
import SearchMovies from "./searchMovies";
import Navbar from "./navbar.js";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="container-title">Movie Search</h2>
        <SearchMovies />
      </div>
      <Footer />
    </>
  );
}
