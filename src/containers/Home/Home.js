import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top-line" />
            <div className="progress">
              <div className="in" />
              <div className="" />
              <div className="" />
              <div className="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <center>
              <h1>Create Account</h1>
              <div>Glad to see you here!</div>
            </center>
          </div>
        </div>
        <form action="/step1.html" method="POST" encType="application/x-www-form-urlencoded">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="Email">Account</label>
                <input type="email" name="Email" data-valid="1" className="form-control" placeholder="hexschool@email.com" data-toggle="tooltip" title="INVALID EMAIL" />
                <i className="fas fa-exclamation-triangle" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" name="Password" data-valid="1" className="form-control" placeholder="Password" data-toggle="tooltip" title="MINIMUM 8 CHARACTERS" />
                <i className="fas fa-exclamation-triangle" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="password" name="ConfirmPassword" data-valid="1" className="form-control" placeholder="Password" data-toggle="tooltip" title="NOT MATCH" />
                <i className="fas fa-exclamation-triangle" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <Link to="/step2">
                  <button type="submit" className="btn btn-primary form-control warn">SUBMIT & NEXT</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
