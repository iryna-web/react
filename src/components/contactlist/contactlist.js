import React from 'react';
import './contactlist.css';
import ContactItem from './contactListItem/contactItem'


const ContactList = () =>{
    return(
       <div>
        <ul className="list-group pull-down" id="contact-list"> 

        <ContactItem />
        </ul>
      </div>
    );
}

export default ContactList;