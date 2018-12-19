import React, * as react from "react";
import profilePic from '../../assets/images/rajat_profile.jpg';

const styles = {
  root: {
    fontFamily:"Palatino Linotype, Book Antiqua, Palatino, serif",
    fontColor: "black",
    marginTop:50,
    wordBreak: "keep-all",
    textAlign: "justify",
    textIndent: 50
  },
  heading: {
    borderBottom: "1px solid pink",
    paddingBottom: "10px"
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height:130
  }
};
export default class About extends react.Component {
  render() {
    return (
      <div>
        <img src={profilePic} className="img-circle" style={styles.img} alt="Paris"></img>
        <div
        className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
           

          <h3 style={styles.root}>
            {" "}
            My name is <b>Rajat Gang</b>. I am a software developer with a great proclivities towards
            coding and learning new technologies. Having 2 years of experience
            in B2B mobile & web applications, I can work as an individual and
            also as a team member. I accept challenges with a great alacrity and
            always try to find best feasible solution.I like to keep myself
            abreast of current technologies and gain profound knowledge on the
            same. I aim to expertise in the areas of my interest. You can always
            find me
            <a href="https://twitter.com/Rajatgang"> @Twitter </a>, my{" "}
            <a href="https://www.facebook.com/rajatgang786">Facebook </a>
            page, <a href="https://github.com/rajatgang786"> GitHub</a>, and
            certainly at my
            <a href="https://medium.com/@gangrajat.mail"> Publications </a>.
            Feel free to ask me any question.
          </h3>
        </div>
        </div>
    );
  }
}
