import React, { Component } from 'react'
import UserConsumer from '../context';


var uniqid = require('uniqid');
class AddUser extends Component {
    state={
        name:"",
        field:"",
        country:""
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.field]: e.target.value,
            [e.target.country]: e.target.value,
        })
    }

    addUser = (dispatch,e) => {
        e.preventDefault();
        const{name,field,country}=this.state;
        const newUser = {
            id: uniqid(),
            name: name,
            field: field,
            country: country
        }
        dispatch({type:"ADD_USER", payload:newUser});
    }

    render() {
        const{name,field,country}=this.state;

        return <UserConsumer>
            {
                value => {
                    const {dispatch}=value;
                    return (
                        <div className='col-md-6 mb-3'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h4>Add User Form</h4>
                                </div>
                                <div className='card-body'>
                                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Full Name' name="name" id='id' className='form-control' value={name} onChange={this.changeInput} />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Field' name="field" id='field' className='form-control' value={field} onChange={this.changeInput} />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Country' name='country' id='country' className='form-control' value={country} onChange={this.changeInput} />
                                        </div>
                                        <button className='btn btn-success btn-block' type='submit'>Add User</button>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}

export default AddUser;