import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapsible from './components/Collapsible'

function App() {
  return (
    <div className="Bg">
      <header>
        <h1>Emoji search</h1>
        <input type="text" id="search"/>
      </header>
      <div>
        <p>Tulostusalue</p>
        <Collapsible emoji=":)" name="Slight Smile"/>
        <Collapsible emoji=":(" name="2"/>
        <Collapsible emoji=":|" name="3"/>
      </div>
    </div>
  );
}

export default App;
