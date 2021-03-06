import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Checkbox from '../shared/Checkbox';

export default class Features extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: '0-$50K'}, {value: '$50K'}, {value: '$1M'}, {value: '$100M+'}];
  }

  selectFeaturesRange(selected) {
    this.props.actions.quiz.selectFeaturesRange(selected);
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
            <Checkbox> <h1> calendering / events </h1></Checkbox>
            <Checkbox> <h1> api integrations </h1> </Checkbox>
            <Checkbox> <h1> advertising </h1></Checkbox>
          </div>
          <div className="flex-half">
            <Checkbox> <h1> custom design </h1> </Checkbox>
            <Checkbox> <h1> blogging </h1> </Checkbox>
            <Checkbox> <h1> other </h1></Checkbox>
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
