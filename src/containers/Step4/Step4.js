import React, { Component } from 'react';

class Step4 extends Component {
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
              <div className="in" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <center>
              <h1>Payment Method</h1>
              <div>Add your credit card infomation!</div>
            </center>
          </div>
        </div>
        <form action="/step4.html" method="POST" encType="application/x-www-form-urlencoded">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="CardNumber">Card Number</label>
                <input type="text" name="CardNumber" data-valid="1" className="form-control" placeholder="1234 5678 9012 3456" data-toggle="tooltip" title="INVALID NUMBER" />
                <i className="fas fa-exclamation-triangle" />
                <i className="fab fa-cc-visa visa" style={{display: 'none'}} />
                <i className="fab fa-cc-mastercard master" style={{display: 'none'}} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="CardholderName">Cardholder Name</label>
                <input type="text" name="CardholderName" className="form-control" placeholder="EXAMPLE NAME" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="BankName">Bank Name</label>
                <input type="text" name="BankName" className="form-control" placeholder="TAIWAN BANK" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="CVV">CVV</label>
                <input type="text" name="CVV" className="form-control" placeholder="666" />
                <i className="fas fa-exclamation-triangle" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="ExpireMonth">Expire Date</label>
                <select className="form-control" name="ExpireMonth" data-from="1" data-to="12" required>
                  <option value="" hidden>MM</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="ExpireYear">&nbsp;</label>
                <select className="form-control" name="ExpireYear" data-from="2018" data-to="2028" required>
                  <option value="" hidden>YYYY</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <button type="submit" className="btn btn-primary form-control warn" formNoValidate>DONE</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Step4;
