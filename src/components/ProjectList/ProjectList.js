import React, { Component } from "react";
import axios from "axios";

const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 50,
    fontColor:"black",
    margin: "auto",
  }
};
export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] , width: 0, height: 0  };

  }

  componentDidMount() {
    this.UserList();

  }

  UserList() {
    axios.get("https://api.github.com/users/rajatgang786/repos").then(res => {
      this.setState({ projects: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.projects.map((item, index) => {
          return (
            <div className="container" key={index} style={{ marginTop:"20px  "}}>
              <div className="card" style={{ width: "auto" , backgroundColor: "white"  }}>
                <div className="card-body">
                  <h4 className="card-title"style={styles.root} >{item.name}</h4>
                  <p style={styles.root} className="card-text">
                  Language - {item.language}
                  </p>
                  <a href={item.clone_url} className="btn btn-primary">
                    <p style={styles.root}>Source Code</p>
                  </a>
                </div>
              </div>
            </div>  
          );
        })}
      </div>
    );
  }
}
