import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class Features extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: '0-$50K'}, {value: '$50K'}, {value: '$1M'}, {value: '$100M+'}];
  }

  selectFeaturesRange(selected) {
    this.props.actions.quiz.selectFeaturesRange(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.selectedFeaturesRange && this.props.state.quiz.selectedFeaturesRange !== null){
      return <Link to="/pages"> Next ➪ </Link>;
    }
  }

  render() {
    return <div className="text-container flex-wrapper flex-column">
      <h1> Which of the following features does your app have? </h1>
      <div className="flex-column-item-end">
        {this.renderSelectOrNext()}
      </div>
    </div>;
  }
}

Features.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
