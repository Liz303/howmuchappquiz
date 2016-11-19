import React from 'react';

export default class Checkbox extends React.Component {
  render() {
    return (
      <div className="checkbox-wrap">
        {this.props.children}
      </div>
    );
  }
}
