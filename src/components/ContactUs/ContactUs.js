import React, { Component } from "react";
import './Contact.css';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="containers">
	<div className="box">
		<div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
		<div className='details'><h3>India</h3></div>
	</div>
	
	<div className="box">
		<div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
		<div className='details'><h3>+91 8107731219</h3></div>
	</div>
	
	<div className="box">
		<div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
		<div className='details'><h3>gangrajat.mail@gmail.com</h3></div>
	</div>
</div>
    )
  }
}
