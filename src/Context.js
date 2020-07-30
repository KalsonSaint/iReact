import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Kalson Steve',
                email: 'kalsonst@gmail.com',
                phone: '111-111-1111'
            },
            {
                id: 2,
                name: 'Stephen Kalson',
                email: 'kalsonst@gmail.com',
                phone: '222-222-2222'
            },
            {
                id: 3,
                name: 'Kalson Saint',
                email: 'kalsonst@gmail.com',
                phone: '333-333-3333'
            }
        ]
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;