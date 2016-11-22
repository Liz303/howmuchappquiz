import React from 'react';
import RadioButton from './RadioButton';

export default class RadioWrapper extends React.Component {
  constructor(...args){
    super(...args);
    this.state = {
      selectedButton: null
    };
  }

  updateSelected(e) {
    if (e.target.value === this.state.selectedButton) {
      this.setState({selectedButton: null});
      this.props.selectAction(null);
    } else {
      this.setState({selectedButton: e.target.value});
      this.props.selectAction(e.target.value);
    }
  }

  renderRadioButtons() {
    return this.props.data.map( (button, i) => {
      return (
        <RadioButton
          key={i}
          value={button.value}
          selectedButton={this.state.selectedButton}
          updateSelected={this.updateSelected.bind(this)}>
            {button.value}
        </RadioButton>
      );
    });
  }

  render() {
    return (
      <div className="radio-button-wrap">
          {this.renderRadioButtons()}
      </div>
    );
  }
}

RadioWrapper.propTypes = {
  data: React.PropTypes.array,
  selectAction: React.PropTypes.func
};
