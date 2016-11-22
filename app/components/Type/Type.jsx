import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class Type extends React.Component {
  constructor(...args){
    super(...args);
    this.data = [{value: 'cms'}, {value: 'ecommerce'}];
  }

  selectApp(selected) {
    this.props.actions.quiz.selectAppType(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.selectedType == 'cms'){
      return <Link to='/pages'> Next ➪</Link>;
    } else if (this.props.state.quiz.selectedType === 'ecommerce') {
      return <Link to='/products'> Next ➪</Link>;
    }
  }

  render() {
    return (
      <div className="text-container flex-wrapper flex-column">
        <h1> What type of app are you building? </h1>
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

Type.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
