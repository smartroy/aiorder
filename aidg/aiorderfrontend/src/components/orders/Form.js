import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addOrder } from "../../actions/orders";
export class Form extends Component {
  state = {
    buyerName: "",
    buyerCell: "",
    buyerAddr: "",
  };

  static propTypes = {
    addOrder: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { buyerName, buyerCell, buyerAddr } = this.state;
    const order = { buyerName, buyerCell, buyerAddr };
    this.props.addOrder(order);
    this.setState({
      buyerName: "",
      buyerCell: "",
      buyerAddr: "",
    });
  };

  render() {
    const { buyerName, buyerCell, buyerAddr } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add order</h2>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group col-xs-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="buyerName"
                onChange={this.onChange}
                value={buyerName}
              />
            </div>
            <div className="form-group col-xs-6">
              <label>Cell</label>
              <input
                className="form-control"
                type="text"
                name="buyerCell"
                onChange={this.onChange}
                value={buyerCell}
              />
            </div>
            <div className="form-group col-xs-6">
              <label>Addr</label>
              <input
                className="form-control"
                type="text"
                name="buyerAddr"
                onChange={this.onChange}
                value={buyerAddr}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addOrder })(Form);
