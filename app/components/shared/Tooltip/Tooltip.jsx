import React, { PropTypes } from 'react';

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
      <span className="tooltip-wrapper"
            onMouseEnter={this.showTooltip.bind(this)}
            onMouseLeave={this.hideTooltip.bind(this)}>
        <div className={tooltipClass}>
          <div className="tooltip-content">
            {this.props.info}
          </div>
        </div>
        {this.props.children}
      </span>
    );
  }
}

Tooltip.propTypes = {
  state: PropTypes.object,
  children: PropTypes.string,
  info: PropTypes.string
};
