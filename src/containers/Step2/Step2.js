import React, { Component } from 'react';

class Step2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top-line" />
            <div className="progress">
              <div className="in done" />
              <div className="in" />
              <div className="" />
              <div className="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <center>
              <h1>General Infomation</h1>
              <div>Tell us who you are!</div>
            </center>
          </div>
        </div>
        <form action="/step2.html" method="POST" encType="application/x-www-form-urlencoded">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="Name">Name
                  <span>(optional)</span>
                </label>
                <input type="text" name="Name" className="form-control" placeholder="Example Name" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="Phone">Phone</label>
                <input type="text" name="Phone" data-valid="1" className="form-control" placeholder="0912345678" data-toggle="tooltip" title="NUMBERS ONLY" />
                <i className="fas fa-exclamation-triangle" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="BirthDate">Birth Date
                <span>(optional)</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="BirthYear" data-from="1900" data-to="2018" required>
                  <option value="" hidden>YYYY</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="BirthMonth" data-from="1" data-to="12" required>
                  <option value="" hidden>MM</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="BirthDate" data-from="1" data-to="31" required>
                  <option value="" hidden>DD</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="City">Address</label>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <select className="form-control city" name="City" required>
                  <option value="" hidden>City</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <select className="form-control region" name="Region" required>
                  <option value="" hidden>Dist</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input type="text" name="Address" data-valid="1" className="form-control" placeholder="detail address" data-toggle="tooltip" title="REQUIRED FILED" />
                <i className="fas fa-exclamation-triangle" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <button type="submit" className="btn btn-primary form-control warn" formNoValidate>SUBMIT & NEXT</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Step2;
