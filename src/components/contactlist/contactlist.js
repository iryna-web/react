import React from 'react';
import './contactlist.css';
import ContactItem from './contactListItem/contactItem';



const ContactList = ({List}) =>{
  console.log('ContactList =>',List)


const item = List.map(item=>{
  return <ContactItem 
  key={
    item.id
  }
  name={item.name} 
  adress={item.adress} 
  phone={item.phone} 
  email={item.email} 
  avatar={item.avatar} 
  star={item.star} 
  gender={item.gender} 
  //onstarChange={()=>onstarChange(item.id)}
  />
})


    return(
       <div>
        <ul className="list-group pull-down" id="contact-list"> 

        {item}
        </ul>
      </div>
    );
}

export default ContactList;