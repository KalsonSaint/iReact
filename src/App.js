import React, {Component} from 'react'
import Header from "./components/Header";
import Contacts from './components/Contacts'
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
                        <Contacts />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App