import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import React from 'react';
import {render as Render} from 'react-dom';

class ComposedApp extends React.Component{
  render(){
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
};

Render(<ComposedApp/>, document.getElementById('app'));