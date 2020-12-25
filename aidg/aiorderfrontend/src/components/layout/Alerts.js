import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.buyerName)
        alert.error(`Name: ${error.msg.buyerName.join()}`);
      if (error.msg.buyerCell)
        alert.error(`Cell: ${error.msg.buyerCell.join()}`);
      if (error.msg.buyerName)
        alert.error(`Addr: ${error.msg.buyerAddr.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
    }
    if (message !== prevProps.message) {
      if (message.deleteOrder) alert.success(message.deleteOrder);
      if (message.addOrder) alert.success(message.addOrder);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
