import React, {Component} from 'react';
import * as actions from './services/actions.jsx';
import {connect} from 'react-redux';
import Content from './components/Content.jsx';
import List from './components/List.jsx';

class App extends Component{
  componentWillMount() {
    this.props.dispatch(actions.getData())
  }
  render() {
     return (
       <div id="composedApp">
         <div id="body">
          <Content />
         </div>
       </div>
    );
  }
};

const select = (state) =>{
  return {}
}

export default connect(select)(App);

//return <div>content</div>
