import React, { Component } from 'react'

export default class extends React.Component {
  
  render() {
    
    const senator = this.props.person
    
    return (
      <div>
        <h4>{senator.person.firstname}{senator.person.lastname}</h4>
        <div>{senator.startdate}</div>
        <div>{senator.description}</div>
        <div>{senator.phone}</div>
        {/*Display useful info of a senator*/}
      </div>
    );
  }
}