import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class Revenue extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: '0-$50K'}, {value: '$50K'}, {value: '$1M'}, {value: '$100M+'}];
  }

  selectRevenueRange(selected) {
    this.props.actions.quiz.selectRevenueRange(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.selectedRevenueRange && this.props.state.quiz.selectedRevenueRange !== null){
      return <Link to="/pages"> Next ➪ </Link>;
    }
  }

  render() {
    return <div className="text-container flex-wrapper flex-column">
      <h1> How much revenue will your app bring in? </h1>
      <RadioGroup
        data={this.data}
        selectedButton={this.props.state.quiz.selectedRevenueRange}
        selectAction={this.selectRevenueRange.bind(this)}/>
      <div className="flex-column-item-end">
        {this.renderSelectOrNext()}
      </div>
    </div>;
  }
}

Revenue.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
