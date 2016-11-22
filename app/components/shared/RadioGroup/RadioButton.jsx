import React from 'react';

export default class RadioButton extends React.Component {
  constructor(...args){
    super(...args);
  }

  toggleSelected(e) {
    this.props.updateSelected( e );
  }

  render() {
    let radioButtonStyle = `styled-radio ${this.props.selectedButton === this.props.value ? 'selected' : ''}`;
    return (
      <label className="radio-button">
        <input type="radio"
          value={this.props.value}
          checked={this.props.selectedButton === this.props.value}
          onChange={this.toggleSelected.bind(this)}/>
        <div className={radioButtonStyle}> {this.props.value} </div>
      </label>
    );
  }
}

RadioButton.propTypes = {
  value: React.PropTypes.string,
  selectedButton: React.PropTypes.string,
  updateSelected: React.PropTypes.func,
  action: React.PropTypes.func
};
