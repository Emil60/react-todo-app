import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER": 
        return{
            ...state,
            users: state.users.filter(user => action.payload !== user.id)
        }
        case "ADD_USER": 
        return{
            ...state,
            users: [...state.users,  action.payload]
        }
        default:
            return state
    }
}

export class UserProvider extends Component {
    state={
        users:[
          {
            id:"unique1",
            name: "Adil Shirinov",
            field: "Software Engineer",
            country: "Russia"
          },
          {
            id:"unique2",
            name: "Emil Ocaqverdiyev",
            field: "Software Engineer",
            country: "Azerbaijan"
          },
          {
            id:"unique3",
            name: "Sebastian Vettel",
            field: "F1 Driver",
            country: "Germany"
          },
          {
            id:"unique4",
            name: "Some One",
            field: "smt",
            country: "world"
          }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
      }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
