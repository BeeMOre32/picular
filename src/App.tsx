import React from 'react';
import './style/app.scss';
import Input from './component/Input';
import placeHolderText from './constant/stringArr';
import Grid from './Grid';

function App() {
  return (
    <div className="App">
      <h1>The color of anything.</h1>
      <Input placeHolderText={placeHolderText} />
      <Grid />
    </div>
  );
}

export default App;
