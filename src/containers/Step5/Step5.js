import React, { Component } from 'react';

class Step5 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top-line" />
            <div className="progress">
              <div className="in done" />
              <div className="in done" />
              <div className="in done" />
              <div className="in done" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <center>
              <h1>Congratulations</h1>
              <div>Now you’re one of us!</div>
            </center>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-12">
              <div className="form-group smile">
                  <i className="fas fa-smile" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <h5>Redirected to homepage after 5 seconds…</h5>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Step5;
