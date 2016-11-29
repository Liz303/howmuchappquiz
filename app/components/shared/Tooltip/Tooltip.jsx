import React, { PropTypes, ReactPropTypeLocationNames } from 'react';

export default class Tooltip extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      show: false
    };
  }

  showTooltip() { this.setState({ show: true}); }
  hideTooltip() { this.setState({ show: false }); }

  render() {
    let tooltipClass=`tooltip ${this.state.show ? 'show' : 'hide'}`;
    return (
      <strong className="tooltip-wrapper"
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}>
        <div className={tooltipClass}>
          <div className="tooltip-content">
            {this.props.info}
          </div>
        </div>
        {this.props.children}
      </strong>
    );
  }
}

let tooltipType = createChainableTypeChecker(tooltipTypeChecker);

Tooltip.propTypes = {
  state: PropTypes.object,
  children: tooltipType,
  info: PropTypes.string
};


function tooltipTypeChecker(props, propName) {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'string' || typeof value === 'object') {
      return null;
    } else {
      return 'Not provided';
    }
  }
  // assume all ok
  return null;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || 'ANONYMOUS';
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          ('Required ' + locationName + ' `' + propName + '` was not specified in ') +
          ('`' + componentName + '`.')
        );
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  let chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
