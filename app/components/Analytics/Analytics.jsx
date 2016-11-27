import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class Analytics extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: 'yes'}, {value: 'no'}];
  }

  selectAnalytics(selected) {
    this.props.actions.quiz.selectAnalytics(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.analytics && this.props.state.quiz.analytics !== null){
      return <Link to="/results"> Next ➪ </Link>;
    }
  }

  render() {
    return <div className="text-container flex-wrapper flex-column">
      <h1> Will you need to track analytics? </h1>
      <RadioGroup
        data={this.data}
        selectedButton={this.props.state.quiz.selectedAnalyticsRange}
        selectAction={this.selectAnalyticss.bind(this)}/>
      <div className="flex-column-item-end">
        {this.renderSelectOrNext()}
      </div>
    </div>;
  }
}

Analytics.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
