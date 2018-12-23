import React, * as react from "react";
const styles = {
  root: {
    fontFamily:"Palatino Linotype, Book Antiqua, Palatino, serif",
    fontColor: "black",
    wordBreak: "keep-all",
    textAlign: "justify", 
  },
  heading: {
    borderBottom: "1px solid pink",
    paddingBottom: "10px",
    cursor:"pointer"
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height:130
  }
};
export default class Article extends react.Component {
  render() {
    return (
      <div class="container-fluid" style={{ backgroundColor: "white" }}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 card-body">
              <h4
                className="card-title"
                onClick={() =>
                  window.open(
                    "https://medium.com/groww-engineering/reactjs-vs-angular-which-one-is-better-c6efae974e15"
                  )
                }
                style={styles.heading}
              >
                ReactJS vs Angular : Which one is better?
              </h4>
              <p style={styles.root} className="card-text">
                In this article we will learn the difference between Angular and React and which framework or library we should use according to our project.
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop:"20px"}}>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 card-body">
                <h4
                  className="card-title"
                  style={styles.heading}
                  onClick={() =>
                    window.open(
                      "https://medium.com/groww-engineering/how-to-install-node-js-and-node-package-manager-npm-on-ubuntu-17-04-f0595765c19a"
                    )
                  }
                >
                  How to Install Node.js and Node Package Manager (NPM) on
                  Ubuntu 17.04
                </h4>
                <p style={styles.root} className="card-text">
                In this Article we will learn How to install Node.js and NPM on Ubuntu?
                Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast and scalable network applications.Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
