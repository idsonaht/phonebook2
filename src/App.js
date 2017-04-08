import React, { Component } from 'react';
import PhoneBook from './components/phonebook';
import AddPerson from './components/addPerson';
import logo from './assets/logo.png';
import './App.css';

// var Hapi = require('hapi');
// var mongoose = require("mongoose");
//
// var server = new Hapi.Server();
// server.connection({ port: 3000 });


// mongoose.connect('mongodb://localhost/test');

class App extends Component {
  constructor(){
    super();
    this.state = {
      phonebook: []
    }
  }

//Fetch from api
  componentWillMount(){

  }

  getPhoneBook(){
    this.setState({phonebook: [
        {
          firstName : 'Thanos',
          lastName : 'Di',
          phone : '6978791291',
          address : 'Smirnis 140',
          city : 'Athens',
          country : 'Greece',
          group: 'Work'
        },
        {
          firstName : 'Thanos2',
          lastName : 'Di',
          phone : '6978791291',
          address : 'Smirnis 140',
          city : 'Athens',
          country : 'Greece',
          group: 'Work'
        },
        {
          firstName : 'Thanos3 ',
          lastName : 'Di',
          phone : '6978791291',
          address : 'Smirnis 140',
          city : 'Athens',
          country : 'Greece',
          group: 'Work'
        }
      ]});
  }

  componentDidMount(){
    this.getPhoneBook();
  }

  handleAddPerson(person){
    let phonebook = this.state.phonebook;
    phonebook.push(person);
    this.setState({phonebook:phonebook});

  }

  handleDeletePerson(id){
    let phonebook = this.state.phonebook;
    let index = phonebook.findIndex(x => x.id === id);
    phonebook.splice(index, 1);
    this.setState({phonebook:phonebook});

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <AddPerson addPerson={this.handleAddPerson.bind(this)}/>
        <br/>
        <PhoneBook phonebook={this.state.phonebook} onDelete={this.handleDeletePerson.bind(this)}/>
      </div>
    );
  }
}

export default App;
