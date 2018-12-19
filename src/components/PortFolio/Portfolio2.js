import React, { Component } from "react";
import About from "../About/About";
import ProjectList from "../ProjectList/ProjectList";
import { Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Article from "../Articles/Article";
import ContactUs from "../ContactUs/ContactUs";
import "./Portfolio.css";
import "./script.js";
import "../social-share.css";

const styles = {
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
    backgroundColor:"#f5f5f5"
  },
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 50,
    fontColor: "black",
    marginTop: 80,
    textAlign: "center",
    color: "black"
  }
};

export default class PortFolio2 extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div id="wrapper">
            <div className="overlay" />
            <nav
              className="navbar navbar-inverse navbar-fixed-top"
              id="sidebar-wrapper"
              role="navigation"
            >
              <ul className="nav sidebar-nav">
                <li className="sidebar-brand">
                  <NavLink to="/">PortFolio</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/project">Project</NavLink>
                </li>
                <li>
                  <NavLink to="/articles">Articles</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div id="page-content-wrapper">
              <button
                type="button"
                className="hamburger is-closed"
                data-toggle="offcanvas"
              >
                <span className="hamb-top" />
                <span className="hamb-middle" />
                <span className="hamb-bottom" />
              </button>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <Route exact component={HomePage} path="/" />
                    <Route component={About} path="/about" />
                    <Route component={ProjectList} path="/project" />
                    <Route component={Article} path="/articles" />
                    <Route component={ContactUs} path="/contact" />
                  </div>
                </div>
              </div>
            </div>
            <ul class="ct-socials">
              <li>
                <a href="https://twitter.com/Rajatgang">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/rajatgang786">
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://github.com/rajatgang786">
                  <i class="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rajat-gang-aba64071/">
                  <i class="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@gangrajat.mail">
                  <i class="fa fa-medium" />
                </a>
              </li>
            </ul>{" "}
          </div>
        </HashRouter>
        <footer className="page-footer font-large blue"  style={styles.footer}>
          <div style={styles.root} className="footer-copyright text-center py-3">
            © Copyright 2018 - All rights reserved
            <br />
            Designed & Developed by Rajat Gang
          </div>
        </footer>
      </div>
    );
  }
}
