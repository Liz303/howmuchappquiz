import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';
import Tooltip from '../shared/Tooltip';

export default class CMS extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: 'yes'}, {value: 'no'}];
  }

  selectCMS(selected) {
    this.props.actions.quiz.selectCms(selected);
  }

  renderSelectOrNext() {
    console.log('cms ', this.props.state.quiz.cms);
    if (this.props.state.quiz.cms !== undefined){
      return <Link to="/results"> Next ➪ </Link>;
    }
  }

  render() {
    return (
      <div className="text-container flex-wrapper flex-column">
        <h1> Will you need a <Tooltip info="content management system"> cms </Tooltip>? </h1>
        <RadioGroup
          data={this.data}
          selectedButton={this.props.state.quiz.selectedCMSRange}
          selectAction={this.selectCMS.bind(this)}/>
        <div className="flex-column-item-end">
          {this.renderSelectOrNext()}
        </div>
      </div>
    );
  }
}

CMS.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
