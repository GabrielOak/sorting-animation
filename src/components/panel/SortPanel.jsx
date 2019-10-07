import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {randomColor,
        randomId,
        completeRandomColor}
        from '../../algorithms/utils';
import './SortPanel.css'

class SortPanel extends Component {
  constructor(props){
        super(props);
        this.state = {
            rows : this.createRows(),
            id : randomId(),
        };

        this.sort = this.sort.bind(this);
        this.reset = this.reset.bind(this);
        this.updateRows = this.updateRows.bind(this);

    }

    sort(){
        this.props.method(
            this.state.rows,
            this.updateRows.bind(this, this.state.id),
        );
    }

    reset() {
        this.setState({ rows: this.createRows(), id: randomId() });
    }

    updateRows(id, newRows){
        if (id === this.state.id){
            this.setState({ rows: newRows });
        }
    }

    // createRow() {
    //     const rowState = [];
    //     for (let i = 0; i < 40; i++) {
    //       rowState.push(randomColor());
    //     }
    //     return rowState;
    //   }

    createRows() {
        const rows = [];
        for (let i = 0; i < 40; i++) {
            rows.push(completeRandomColor());
        }
        console.log(rows);
        return rows;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.method !== this.props.method) {
            this.setState({ rows: this.createRows(), id: randomId() });
        }
    }

   render() {
    const cellDimension = `${700/50}px`;
    return (
      <div className="visualization">
        <div className="buttonsContainer">
          <button className = 'bttn-sort' onClick={this.sort}>Sort</button>
          <button className = 'bttn-reset' onClick={this.reset}>Reset</button>
        </div>
        {this.state.rows.map((row, rowIndex) => {
          return (<div className="row" style={{height: cellDimension}} key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <span className="cell" key={cellIndex} style={{backgroundColor: "hsl("+cell+", 100%, 50%)", width: cellDimension}} />
            ))}
          </div>);
        })}
      </div>
    );
  }
};
    
SortPanel.propTypes = {
  method: PropTypes.func.isRequired,
};

export default SortPanel;
    