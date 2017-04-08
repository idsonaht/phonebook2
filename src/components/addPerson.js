import React, { Component } from 'react';

class AddPerson extends Component {
  constructor(){
    super();
    this.state = {
      newPerson : {}
    }
  }

  static defaultProps = {
    group: ['Friend', 'Work', 'Family', 'Other']
  }

  /* Submit Handler */
  handleSubmit(e){
    var formIsValid = true;
    /* Check if form has empty values */
    for (const key of Object.keys(this.refs)) {
      if(this.refs[key].value === ''){
        alert(key + ' is required');
        formIsValid = false;
      }
    }

    /* Create newPerson object and add form data */
    if(formIsValid){
      var newPerson = {};
      for (const key of Object.keys(this.refs)) {
        newPerson[key] = this.refs[key].value;
      }
        this.setState({
          newPerson
        }, function(){
          // console.log(this.state);
          this.props.addPerson(this.state.newPerson);
        });
    }
    e.preventDefault();
  }

  render() {
    let groupOptions = this.props.group.map(group => {
      return <option key={group} value={group}>{group}</option>
    });

    return (
      <div>
        <h3>Add Person</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>First Name *</label> <br />
            <input type="text" ref="firstName" /> <br />
          </div>
          <div>
            <label>Last Name *</label> <br />
            <input type="text" ref="lastName" /> <br />
          </div>
          <div>
            <label>Phone *</label> <br />
            <input type="text" ref="phone" /> <br />
          </div>
          <div>
            <label>Address *</label> <br />
            <input type="text" ref="address" /> <br />
          </div>
          <div>
            <label>City *</label> <br />
            <input type="text" ref="city" /> <br />
          </div>
          <div>
            <label>Country *</label> <br />
            <input type="text" ref="country" /> <br />
          </div>
          <div>
            <label>Group *</label> <br />
            <select ref="groups">
              {groupOptions}
            </select>
          </div> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

/* Validation */
AddPerson.propTypes = {
  group: React.PropTypes.array,
  addPerson: React.PropTypes.func
}

export default AddPerson;
