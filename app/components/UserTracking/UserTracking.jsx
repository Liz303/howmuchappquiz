import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class UserTracking extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: 'yes'}, {value: 'no'}];
  }

  selectUserTracking(selected) {
    this.props.actions.quiz.selectTracking(selected);
  }

  renderSelectOrNext() {
    console.log(this.props.state.quiz.tracking);
    if (this.props.state.quiz.tracking !== null){
      return <Link to="/cms"> Next ➪ </Link>;
    }
  }

  render() {
    return <div className="text-container flex-wrapper flex-column">
      <h1> Will you need to store user data? </h1>
      <RadioGroup
        data={this.data}
        selectedButton={this.props.state.quiz.selectedtracking}
        selectAction={this.selectUserTracking.bind(this)}/>
      <div className="flex-column-item-end">
        {this.renderSelectOrNext()}
      </div>
    </div>;
  }
}

UserTracking.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
