import React, { Component } from 'react';

class Step3 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top-line" />
            <div className="progress">
              <div className="in done" />
              <div className="in done" />
              <div className="in" />
              <div className="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <center>
              <h1>Update Profile Picture</h1>
              <div>We wanna know you more!</div>
            </center>
          </div>
        </div>
        <form action="/step3.html" method="POST" encType="multipart/form-data">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="Photos">
                  <div className="upload-box">
                    <i className="fas fa-images" />
                    <div>
                      UPLOAD UP TO 3 PHOTOS<br />
                      MAX SIZE: 150*150px
                    </div>
                  </div>
                  <input type="file" name="Photos" accept="image/*" multiple />
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <button type="button" className="btn btn-warning form-control warn msg" value="">
                  <i className="fas fa-exclamation-triangle" />
                </button>
              </div>
            </div>
          </div>
          <div className="row list">
            <div className="col-4">
              <div className="form-group img">
                <img alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group img">
                <img alt="" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group img">
                <img alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <button type="submit" className="btn btn-primary form-control warn">SUBMIT & NEXT</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Step3;
