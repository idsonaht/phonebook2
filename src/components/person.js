import React, { Component } from 'react';

class Person extends Component {
  deletePerson(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Person">
        <strong>{this.props.person.firstName} {this.props.person.lastName} </strong> - {this.props.person.group}
        <a href="#" onClick={this.deletePerson.bind(this, this.props.person.firstName)}> X</a>
      </li>
    );
  }
}

/* Validation */
Person.propTypes = {
  person: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default Person;
