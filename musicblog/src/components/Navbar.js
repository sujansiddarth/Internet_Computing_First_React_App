import React, { useState, useEffect } from 'react';
import './Navbar.css'
import axios from "axios";
import { Link } from "react-router-dom";



function Navbar() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f0d3f6fb0ef345cab3d1bedbb867fc0b"
        )
        .then((response) => {
          setArticles(response.data.articles.slice(0, 5));
        })
        .catch((error) => {
          console.log(error);
        });
    }, 60000);
    return () => clearInterval(interval);
  }, []);



  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand ms-auto brand title" href="#">
            Billboard Music
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
export default Navbar;