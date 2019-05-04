import * as React from 'react';
import { WebSlider } from './components/slider';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <WebSlider/>
      </div>
    );
  }
}

export default App;