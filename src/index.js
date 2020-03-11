import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//Componets

import ContactList from "./components/contactlist/contactlist";


class App extends React.Component{

    state={
        List:[
            {
                id:1,
            name: 'Mike Tyson ',
            adress: 'Stepana Bandery street, Harlem',
            phone: '097-844-66-34',
            email:'mike.tyson@gmail.com',
            avatar: 16,
            gender: 'men',
            star: false
        },
        {
            id:2,
            name: 'Nick Jangle ',
                adress: 'Chornovola street, Rivne',
                phone: '067-444-01-21',
                email:'nick.jangle@mail.ru',
                avatar: 12,
                gender: 'men',
                star: false 
            },
        {
            id:3,
            name: 'Bill Stepanovich ',
            adress: ' Greenwood street, California',
            phone: '063-733-63-14',
            email:'bill.stepanovich@gmail.com',
            avatar: 11,
            gender: 'men',
            star: false
        },
        {
            id:4,
            name: ' Jacob Himmel',
            adress: 'Bregenz street, Austria',
            phone: '088-00-3564-766',
            email:'jacob.1993@gmail.com',
            avatar: 3,
            gender: 'men',
            star: false
        },
        {
            id:5,
            name: 'Alex Vendor',
            adress: 'Vokzalna street, Harlem',
            phone: '044-444-099-34',
            email:'alex.647495@gmail.com',
            avatar: 5,
            gender: 'men',
            star: false
        }
        
        ]};


        onstarChange =id=>{
            console.log(id)
        }


    render(){
        const {List}=this.state.List;
        return(
            <div>
           
            <div className="container">
            <h1>Contact App</h1>

<div className="card card-default" id="card_contacts">
    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
    <ContactList List={this.state.List} onstarChange={this.onstarChange} />
            </div>
            </div>
            </div>
        </div>
    )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


