import React, * as react from "react";
import profilePic from '../../assets/images/rajat_profile.jpg';
const styles = {
  root: {
    fontFamily:"Palatino Linotype, Book Antiqua, Palatino, serif",
    fontWeight: 40,
    fontColor: "black",
    textAlign:"center"
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height:130
  }
};
class HomePage extends react.Component {
  render() {
    return (
      <div >
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
           When I sit next to Computer magic happens.
          </h3>
        </div>
      </div>
    );
  }
}

export default HomePage;
