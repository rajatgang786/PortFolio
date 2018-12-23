import React, { Component } from "react";
import "./ProjectList.css";

export default class ProjectList extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="column">
            <div class="card">
              <h1>PortFolio</h1>
              <p>
              This project describe about Rajat Gang and my work.

              </p>
              <p>
                <button><a href="https://github.com/rajatgang786/PortFolio" target="_blank">Source Code</a></button>
              </p>
            </div>
          </div>

        <div className="column">
          <div class="card">
            <h1>Super Mario</h1>
            <p>
              A platformer game, re-invented with additional power-ups and graphics.
            </p>
            <p>
              <button><a href="https://github.com/rajatgang786/SuperMario" target="_blank">Source Code</a></button>
            </p>
          </div>
        </div>
      </div>

      <div class="row" style={{marginTop:'50px'}}/>

      <div class="row">
          <div class="column">
            <div class="card">
              <h1>React-Js Tuts </h1>
              <p>
              The techniques to learn in the tutorial are fundamental to building any React apps, and mastering it will give user a deep understanding of React.

              </p>
              <p>
                <button>Private Project</button>
              </p>
            </div>
          </div>

        <div className="column">
          <div class="card">
            <h1>Android-Tutorial</h1>
            <p>
              The techniques to learn in the tutorial are fundamental to building any Android apps, and mastering it will give user a deep understanding of Android.
            </p>
            <p>
              <button><a href="https://github.com/rajatgang786/Android-Tutorial" target="_blank">Source Code</a></button>
            </p>
          </div>
        </div>
      </div>

      <div class="row" style={{marginTop:'50px'}}/>

      <div class="row">
          <div class="column">
            <div class="card">
              <h1>Attendence System</h1>
              <p>
              Classroom document sharing platforms for student and faculty.

              </p>
              <p>
                <button><a href="https://github.com/rajatgang786/AttendanceSystem" target="_blank">Source Code</a></button>
              </p>
            </div>
          </div>

        <div className="column">
          <div class="card">
            <h1>Portal4U</h1>
            <p>
            A platformer game, re-invented with additional power-ups and graphics.
            </p>
            <p>
              <button><a href="https://github.com/rajatgang786/Portal4U" target="_blank">Source Code</a></button>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
