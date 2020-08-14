import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };

  state = {
    showContatctInfo: false,
  };

  deleteItem = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    // destructuring props
    const { id, name, email, phone } = this.props.contact;
    const { showContatctInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      showContatctInfo: !this.state.showContatctInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fas fa-times" style={{ cursor: "pointer", float: "right", color: "crimson"}} onClick={this.deleteItem.bind(this, id, dispatch)}
                ></i>
              </h4>
              {showContatctInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;

// Contact.propTypes = {
//     name : PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
// }
