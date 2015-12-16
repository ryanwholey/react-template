import React from 'react';
import jquery from 'jquery'

const $ = jquery;

var Header = React.createClass({
  getInitialState() {
    return {
      message: 'not loaded'
    }
  },

  componentDidMount() {
    $.ajax({
      url:'http://localhost:8000/api/data',
      success: function(data){
        if(this.isMounted()){
          this.setState({message: data});
        }
      }.bind(this)
    });
  },

  handleClick() {
    this.setState({
      message: 'state restarrte!!'
    });
  },

  render() {
    return (
      <div>
        <h1> Header</h1>
        <div> {this.state.message}</div>
        <input type="button" onClick={this.handleClick} value="change data"/>
      </div>
    );
  }
});

export default Header;