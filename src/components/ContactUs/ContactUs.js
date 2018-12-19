import React, { Component } from "react";
import './Contact.css';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="container" style={{marginTop: "1em"}}>
        <form>
          <div className="card person-card">
            <div className="card-body">
              <img
                id="img_sex"
                className="person-img"
                alt="User"
                src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg"
              />
              <h2 id="who_message" className="card-title">
                Who are you ?
              </h2>
              <div className="row">
                <div className="form-group col-md-2">
                  <select id="input_sex" className="form-control">
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </div>
                <div className="form-group col-md-5">
                  <input
                    id="first_name"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                  <div id="first_name_feedback" className="invalid-feedback" />
                </div>
                <div className="form-group col-md-5">
                  <input
                    id="last_name"
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                  <div id="last_name_feedback" className="invalid-feedback" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6" style={{padding:"0.5em;"}}>
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">How to contact you ?</h2>
                  <div className="form-group">
                    <label for="email" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@gmail.com"
                      required
                    />
                    <div className="email-feedback" />
                  </div>
                  <div className="form-group">
                    <label for="tel" className="col-form-label">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tel"
                      placeholder="+33 6 99 99 99 99"
                      required
                    />
                    <div className="phone-feedback" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Securize your account !</h2>
                  <div className="form-group">
                    <label for="password" className="col-form-label">
                      Pasword
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Type your password"
                      required
                    />
                    <div className="password-feedback" />
                  </div>
                  <div className="form-group">
                    <label for="password_conf" className="col-form-label">
                      Pasword (confirm)
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password_conf"
                      placeholder="Type your password again"
                      required
                    />
                    <div className="password_conf-feedback" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: "1em"}}>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Sign up !
            </button>
          </div>
        </form>
      </div>
    );
  }
}
