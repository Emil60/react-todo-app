import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    state={
        isVisible: false
    }

    nameClickEvent = (smt,e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        const {name, field, country}=this.props;
        const {isVisible}=this.state
        return (
            <div className="col-md-6 mb-3">
                <div className='card'>
                    <div className='card-header d-flex justify-content-between'>
                        <h4 className="d-inline" onClick={this.nameClickEvent} style={{cursor: 'pointer'}}>{name}</h4>
                        <i className="fas fa-trash-alt" style={{cursor: 'pointer'}}></i>
                    </div>
                    {
                        isVisible ? <div className='card-body'>
                                        <p className='card-text text-left'>Field: {field}</p>
                                        <p className='card-text text-left'>Country: {country}</p>
                                    </div>
                    : null
                    }
                    
                </div>
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
