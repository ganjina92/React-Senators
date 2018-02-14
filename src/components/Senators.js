import React, { Component } from 'react'
import Senator from './Senator.js'
import { getDemocrats, getRepublicans } from '../filters'

export default class extends Component {
  
  renderRepublicans () {
    return getRepublicans().map(senator => <Senator person={senator}/>)
  }
  renderDemocrats () {
    return getDemocrats().map(senator => <Senator person={senator}/>)
  }
  //renderDemocrats
  
  render() {
    
    const republicans = this.renderRepublicans()
    const democrats = this.renderDemocrats()
    //use Rendered Democrats
    
    return (
      <div>
        <h1>Republicans</h1>
        {republicans}
        <hr></hr>
        <h2>Democrats</h2>
        {democrats}
      </div>
    );
  }
}



// Another way to write a React Component Class
// class Senators extends Component {
//
// }
//
// export default Senators