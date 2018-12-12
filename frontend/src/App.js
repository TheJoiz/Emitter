import React, { Component } from 'react';
import './App.scss';
import Header from "./Header";
import Messages from "./components/Messages/Messages";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Messages/>
      </div>
    );
  }
}

export default App;
