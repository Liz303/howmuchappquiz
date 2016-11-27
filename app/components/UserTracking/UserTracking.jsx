import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class UserTracking extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: 'yes'}, {value: 'no'}];
  }

  selectUserTrackings(selected) {
    this.props.actions.quiz.selectUserTrackingRange(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.userTracking && this.props.state.quiz.userTracking !== null){
      return <Link to="/storage"> Next ➪ </Link>;
    }
  }

  render() {
    return <div className="text-container flex-wrapper flex-column">
      <h1> Will you need to store user data? </h1>
      <RadioGroup
        data={this.data}
        selectedButton={this.props.state.quiz.selectedUserTrackingRange}
        selectAction={this.selectUserTrackings.bind(this)}/>
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
