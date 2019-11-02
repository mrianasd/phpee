import React from 'react';


class ContactList extends React.Component {
    constructor(){
        super();
        this.state = {
            text:'myText'
        }
    }
    render() {
        return (
            <div id="Contacts" className="tabcontent">
                <h3>Contact List</h3>
               <p>Here you will se the list of laboratories you can see</p>
            </div>
        );
    }
}

export default ContactList;
