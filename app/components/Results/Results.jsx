import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Results extends React.Component {
  getTotal() {
    let { selectedType, selectedProductRange, selectedPageRange, apiIntegration,
    calendering, blogging, advertising, design, other, selectedRevenueRange,
    userTracking, cms } = this.props.state.quiz;
    let defaultCost = 5000;
    if ( selectedType === 'store') {
      defaultCost += 10000;
      if ( selectedProductRange === '50 - 100') { defaultCost += 5000; }
      else if ( selectedProductRange === '100 - 300') { defaultCost += 10000; }

      if ( selectedRevenueRange === '$50K - $1M') { defaultCost += 20000; }
      else if ( selectedRevenueRange === '$1M +') { defaultCost += 50000; }
    }

    if ( selectedPageRange === '3-5') { defaultCost += 5000; }
    else if ( selectedPageRange === '5+' ) { defaultCost += 10000; }

    if ( cms === true ) { defaultCost += 1000; }
    if ( userTracking === true ) { defaultCost += 5000; }
    if ( apiIntegration === true ) { defaultCost += 5000; }
    if ( calendering === true ) { defaultCost += 5000; }
    if ( blogging === true ) { defaultCost += 5000; }
    if ( advertising === true ) { defaultCost += 5000; }
    if ( design === true ) { defaultCost += 10000; }
    if ( other === true ) { defaultCost += 5000; }
    if (defaultCost) {
      return (
        <h1 className="flex-center total"> $ {defaultCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} - $ {(defaultCost + 20000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h1>
      );
    }
  }

  render() {
    return (
      <div className="text-container flex-wrapper flex-column results">
        The estimated cost of your app is:
        <div className="flex-wrapper-center">
          {this.getTotal()}
        </div>
        <div className="flex-column-item-end">
          <Link to="/" onClick={() => this.props.actions.quiz.clearResults()}>
            Get another quote
          </Link>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};
