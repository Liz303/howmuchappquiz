import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class Pages extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: '1-3'}, {value: '3-5'}, {value: '5+'}];
  }

  selectApp(selected) {
    this.props.actions.quiz.selectPageRange(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.selectedPageRange && this.props.state.quiz.selectedPageRange !== null){
      return <Link to="/features"> Next ➪ </Link>;
    }
  }

  render() {
    return (
      <div className="text-container flex-wrapper flex-column">
        <h1> How many unique pages will your app have? </h1>
        <RadioGroup
          data={this.data}
          selectAction={this.selectApp.bind(this)}/>
        <div className="flex-column-item-end">
          {this.renderSelectOrNext()}
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
