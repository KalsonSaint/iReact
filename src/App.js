import React, {Component} from 'react'

import Header from "./components/layout/Header";
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContacts'

import { Provider } from './Context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header brand="Contact List"/>
                    <div className="container">
                        <AddContact />
                        <Contacts />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App