import React, { Component } from 'react'
import PropTypes from 'prop-types' 

class Contact extends Component {

    static propTypes = { 
        contact : PropTypes.object.isRequired,
    }

    state = {
        showContatctInfo: false
    };

    render(){
        // destructuring props
        const {name, email, phone} = this.props.contact;
        const { showContatctInfo } = this.state;

        return(
            <div className="card card-body mb-3">
                <h4>{name} <i onClick={() => this.setState({showContatctInfo: !this.state.showContatctInfo})} className="fas fa-sort-down"></i></h4>
                { showContatctInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ): null}
            </div>
        )
    }
}

export default Contact

// Contact.propTypes = { 
//     name : PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
// }