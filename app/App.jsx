import Header from './components/Header.jsx';
import React from 'react';
import {render as Render} from 'react-dom';

class ComposedApp extends React.Component{
  render(){
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
};

Render(<ComposedApp/>, document.getElementById('app'));