import React, { Component } from "react";
import logo from "../../assets/images/Rajat.jpg";
import About from "../About/About";
import ProjectList from "../ProjectList/ProjectList";
import { Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Article from "../Articles/Article";
import ContactUs from "../ContactUs/ContactUs";
export default class PortFolio extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <NavLink className="min-auto" to="/">
              <img
                src={logo}
                style={{
                  width: "auto",
                  maxWidth: "10%",
                  height: "auto",
                  display: "block",
                  margin: "auto"
                }}
                alt="Rajat Portfolio"
                className="rounded-circle"
              />
            </NavLink>

            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
                <div style={{ display: "flex" }}>
                  <div className="navbar-header" style={{ marginTop: "7px" }}>
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#myNavbar"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>

                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                      <li>
                        <NavLink className="nav-link" to="/about">
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/project">
                          Project
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/articles">
                          Articles
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Route exact component={HomePage} path="/" />
              <Route component={About} path="/about" />
              <Route component={ProjectList} path="/project" />
              <Route component={Article} path="/articles" />
              <Route component={ContactUs} path="/contact" />
            </div>
          </div>
        </HashRouter>
        <footer className="page-footer font-large blue" style={{marginTop:"30px"}}>
          <div className="footer-copyright text-center py-3">
            © Copyright 2018 - All rights reserved
            <br />
            Designed & Developed by Rajat Gang
          </div>
        </footer>
      </div>
    );
  }
}
