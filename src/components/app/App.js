import React, {Component} from 'react';
import SortPanel from '../panel/SortPanel';
import algorithms from '../../algorithms/index';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sortingMethod : 'bubble',
    };
    this.changeMethod = this.changeMethod.bind(this);
  }
  changeMethod(event){
    this.setState({ sortingMethod: event.target.value })
  }

  render(){
    return(
      <div className = 'App'>
        <header className ='App-header'>
          <h1 className = 'App-title'> Sort Algorithms O(n log n)</h1>
        </header>
        <div className = 'options-container'>
          <button className='bttn-algorithm' value = 'bubble' onClick ={this.changeMethod}> Bubble </button>
          <button className='bttn-algorithm' onClick ={this.changeMethod}> Merge </button>
          <button className='bttn-algorithm' value = 'quick' onClick ={this.changeMethod}> Quick </button>
          <button className='bttn-algorithm' value = 'bucket' onClick ={this.changeMethod}> Bucket </button>
          <button className='bttn-algorithm' value = 'shell' onClick ={this.changeMethod}> Shell </button>
        </div>
        <SortPanel
          method={algorithms[this.state.sortingMethod]}
        />
      </div>
    );
  }
}

export default App;