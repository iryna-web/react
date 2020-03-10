import React, { Component, Fragment } from 'react';
import './contactItem.css';

class ContactItem extends Component{
    state={
        name: 'Mike Tyson ',
        adress: 'Stepana Bandery street, Harlem',
        phone: '097-844-66-34',
        email:'mike.tyson@gmail.com',
        avatar: 16,
        gender: 'men',
        star: false
    }
onRandomAvatar=()=>{
    const avatar = Math.floor(Math.random()*Math.floor(99))
    this.setState({
        avatar:avatar
    })
}
StarChange=()=>{
    if(this.state.star===false){
        this.setState({
            star:true
        })
    }
    else if(this.state.star===true){
        this.setState({
            star:false
        })
    }
}

    render(){
        const{name, adress, phone, email, avatar, gender}=this.state
        let {star}=this.state
        const url=`https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        if(star===false){
            star="far fa-star" 
        }
        else if(star===true){
            star="fas fa-star"
        }
          
            return(
                <Fragment>
                <li className="list-group-item">
                            <div className="row w-100">
                                <div className="col-12 col-sm-6 col-md-3 px-0">
                                    <img src={url}alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid"/>
        
                                    </div>
                                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                                    <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
            <label className="name lead"> {name}</label>
                                    <br/> 
                                    <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
            <span className="text-muted">{adress}</span>
                                    <br/>
                                    <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
            <span className="text-muted small">{phone}</span>
                                    <br/>
                                    <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
            <span className="text-muted small text-truncate">{email}</span>
                                </div>
                            </div>
                        </li>
                        <button className="btn btn-success" onClick={this.onRandomAvatar}> Random avatar</button>
                        <i className={star} onClick={this.StarChange}></i>
                        </Fragment>
        )
    }
}

export default ContactItem;