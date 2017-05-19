import React, { Component } from 'react';
import { render } from 'react-dom';

class JoinTypeSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setJoinType(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type='radio'
          className='join-radio'
          name='join-type'
          value='new-game'
          id='new-game'
          onChange={this.handleChange}
          checked={this.props.joinType == 'new-game'}
        />
        <div className='join-radio-container'>
          <label className='radio-label' htmlFor='new-game'>
            Create
          </label>
        </div>
        <input
          type='radio'
          className='join-radio'
          name='join-type'
          value='join-game'
          id='join-game'
          onChange={this.handleChange}
        />
        <div className='join-radio-container'>
          <label className='radio-label' htmlFor='join-game'>
            Join
          </label>
        </div>
      </div>
    );
  };
}

export default JoinTypeSelect;
