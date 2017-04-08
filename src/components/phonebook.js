import React, { Component } from 'react';
import Person from './person';
class PhoneBook extends Component {
  deletePerson(id){
    this.props.onDelete(id)

  }

  render() {
    let persons;
    if(this.props.phonebook){
      persons = this.props.phonebook.map(person =>{
        return (
          <Person onDelete={this.deletePerson.bind(this)} key={person.firstName} person={person} />
        );
      });
    }
    return (
      <div className="PhoneBook">
      {persons}
      </div>
    );
  }
}

/* Validation */
PhoneBook.propTypes = {
  phonebook: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default PhoneBook;
