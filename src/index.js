import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Componets

import ContactList from "./components/contactlist/contactlist";

const App =() => {
    return(
        <div>
           
            <div className="container">
            <h1>Contact App</h1>

<div className="card card-default" id="card_contacts">
    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
    <ContactList />
            </div>
            </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


