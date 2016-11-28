import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';
export default class Type extends React.Component {
  constructor(...args){
    super(...args);
    this.data = [
      {value: 'brochure', tooltip: 'A basic information site.'},
      {value: 'store'}
    ];
  }

  selectApp(selected) {
    this.props.actions.quiz.selectAppType(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.selectedType === 'brochure'){
      return <Link to='/pages'> Next ➪</Link>;
    } else if (this.props.state.quiz.selectedType === 'store') {
      return <Link to='/products'> Next ➪</Link>;
    }
  }

  render() {
    return (
      <div className="text-container flex-wrapper flex-column">
        <h1> What type of app are you building? </h1>
        <RadioGroup
          selectedButton={this.props.state.quiz.selectedType}
          data={this.data}
          selectAction={this.selectApp.bind(this)}/>
        <div className="flex-column-item-end">
          {this.renderSelectOrNext()}
        </div>
      </div>
    );
  }
}

Type.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
