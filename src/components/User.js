import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    render() {
        const {name, field, country}=this.props;
        return (
            <div>
                <ul>
                    <li>{name}</li>
                    <li>{field}</li>
                    <li>{country}</li>
                </ul>
            </div>
        )
    }
}

User.propTypes = {
    "name" : PropTypes.string.isRequired,
    "field": PropTypes.string.isRequired,
    'country': PropTypes.string.isRequired
}

User.defaultProps = {
    "name" : "No Data",
    "field": "No Data",
    'country': "No Data"
}
export default User;
