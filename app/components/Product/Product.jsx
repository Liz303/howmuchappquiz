import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../shared/RadioGroup';

export default class Product extends React.Component {
  constructor(...args) {
    super(...args);
    this.data = [{value: '0-50'}, {value: '50-100'}, {value: '100-300'}, {value: '300+'}];
  }

  selectProducts(selected) {
    this.props.actions.quiz.selectProductRange(selected);
  }

  renderSelectOrNext() {
    if (this.props.state.quiz.selectedProductRange && this.props.state.quiz.selectedProductRange !== null){
      return <Link to="/revenue"> Next ➪ </Link>;
    }
  }

  render() {
    return <div className="text-container flex-wrapper flex-column">
      <h1> How many products will your app hold? </h1>
      <RadioGroup
        data={this.data}
        selectedButton={this.props.state.quiz.selectedProductRange}
        selectAction={this.selectProducts.bind(this)}/>
      <div className="flex-column-item-end">
        {this.renderSelectOrNext()}
      </div>
    </div>;
  }
}

Product.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
