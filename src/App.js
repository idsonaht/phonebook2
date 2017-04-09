import React, { Component } from 'react';
import PhoneBook from './components/phonebook';
import AddPerson from './components/addPerson';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log(name);
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
          email : 'thanosdi@live.com',
          phone : '6978791291',
          address : 'Smirnis 140',
          city : 'Athens',
          country : 'Greece',
          group: 'Friends'
        },
        {
          firstName : 'Thanos2',
          lastName : 'Di',
          email : 'thanosdi2@live.com',
          phone : '6978791291',
          address : 'Smirnis 140',
          city : 'Athens',
          country : 'Greece',
          group: 'Work'
        },
        {
          firstName : 'Thanos3 ',
          lastName : 'Di',
          email : 'thanosdi3@live.com',
          phone : '6978791291',
          address : 'Smirnis 140',
          city : 'Athens',
          country : 'Greece',
          group: 'Family'
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
    let index = phonebook.findIndex(x => x.email === id);
    console.log(index);
    phonebook.splice(index, 1);
    this.setState({phonebook:phonebook});
  }

  render() {
    return (
      <div className="App row">
        <h2>PhoneBook Application</h2>
        <div className="App-header col-sm-12">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <AddPerson addPerson={this.handleAddPerson.bind(this)} />
        <br/>
        <PhoneBook phonebook={this.state.phonebook} onDelete={this.handleDeletePerson.bind(this)}/>
      </div>
    );
  }
}

export default App;
