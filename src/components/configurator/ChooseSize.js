import React, { Component } from 'react';
import Select from 'react-select'

const options = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: '2XL', label: '2XL' },
]

export default class ChooseSize extends Component {

  render() {
    const { onChange } = this.props;
    return (
      <div className="chooseSize">
        <Select options={options} onChange={onChange} />
      </div>
    )
  }
}
