import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Checkbox from '../shared/Checkbox';

export default class Features extends React.Component {
  selectFeatures(selected, isChecked) {
    this.props.actions.quiz.selectFeatures(selected, isChecked);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.selectedType == 'store'){
      return <Link to="/results"> Next ➪ </Link>;
    } else if (this.props.state.quiz.selectedType == 'brochure') {
      return <Link to="/usertracking"> Next ➪ </Link>;
    }
  }

  render() {
    return (
      <div className="text-container flex-wrapper flex-column">
        <h1> Choose the features your app should have? </h1>
        <div className="align-center flex-wrapper flex-row flex-wrap">
          <div className="flex-half">
            <Checkbox
              selectItem={this.selectFeatures.bind(this)}
              value='calendering'>
              <h1> calendering / events </h1>
            </Checkbox>
            <Checkbox
              selectItem={this.selectFeatures.bind(this)}
              value='apiIntegration'>
              <h1> api integrations </h1>
            </Checkbox>
            <Checkbox
              selectItem={this.selectFeatures.bind(this)}
              value='advertising'>
              <h1> advertising </h1>
            </Checkbox>
          </div>
          <div className="flex-half">
            <Checkbox
              selectItem={this.selectFeatures.bind(this)}
              value='design'>
              <h1> custom design </h1>
            </Checkbox>
            <Checkbox
              selectItem={this.selectFeatures.bind(this)}
              value='blogging'>
              <h1> blogging </h1>
            </Checkbox>
            <Checkbox
              selectItem={this.selectFeatures.bind(this)}
              value='other'>
              <h1> other </h1>
            </Checkbox>
          </div>
        </div>
        <div className="flex-column-item-end">
          {this.renderSelectOrNext()}
        </div>
      </div>
    );
  }
}

Features.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
