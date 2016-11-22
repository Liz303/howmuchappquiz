import React from 'react';

export default class Product extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return <div> klja</div>;
  }
}

Product.propTypes = {
  children: React.PropTypes.array
};
