import React, * as react from "react";
import logo from "../../assets/images/Rajat.jpg";
const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 50,
    fontColor: "black",
    
  },
  heading :{
    borderBottom: "1px solid pink",
    paddingBottom: "10px",
    cursor: "pointer" 
  }
};
export default class Article extends react.Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-sm-8 container" style={{ marginTop: "20px  " }}>
            <div
              className="card"
              style={{ width: "auto", backgroundColor: "white" }}
            >
              <div className="card-body">
                <h4 className="card-title" onClick={() => window.open("https://medium.com/groww-engineering/reactjs-vs-angular-which-one-is-better-c6efae974e15")} style={styles.heading}>
                ReactJS vs Angular : Which one is better?
                </h4>
                <p style={styles.root} className="card-text">
                  My name is Rajat Gang and Welcome to my personal website. I'm
                  web/frontend/fullstack developer from India. <br />
                  That said I'm all for exchanging, experimenting new
                  frameworks, or participating in interesting projects. <br />
                  You can always find me @Twitter, my Facebook page, GitHub, and
                  certainly at my Publications. Feel free to ask me any
                  question.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8 container" style={{ marginTop: "20px", marginBottom:"20px" }}>
            <div
              className="card"
              style={{ width: "auto", backgroundColor: "white" }}
            >
              <div className="card-body">
                <h4 className="card-title" style={styles.heading} onClick={() => window.open("https://medium.com/groww-engineering/how-to-install-node-js-and-node-package-manager-npm-on-ubuntu-17-04-f0595765c19a")}>
                  How to Install Node.js and Node Package Manager (NPM) on Ubuntu 17.04
                </h4>
                <p style={styles.root} className="card-text">
                  <br />I mostly work with JavaScript, HTML5 and CSS3. I
                  believe that a strong Vanilla JavaScript knowledge is
                  necessary for being a good web developer.
                  <br /> In addition, I also worked with ReactJS using Redux as a state management library. <br /> New open
                  source technogies excites me, and I can't resist the
                  awesomeness of new ECMA, for making my
                  developing process faster and easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
