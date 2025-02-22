import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <div>
        <navBar className="navbar navbar-expand-lg bg-dark bg-gradient">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white fs-4"
                    aria-current="page"
                    to="/"
                  >
                    {props.title}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white fs-4"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white fs-4"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary fs-5" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </navBar>
      </div>
    </>
  );
}
