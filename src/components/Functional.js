import React from 'react'
import PropTypes from 'prop-types'

function Functional(props) {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}

Functional.propTypes = {
    'title' : PropTypes.string.isRequired
}
Functional.defaultProps = {
    "title":'Default'
}
export default Functional;
