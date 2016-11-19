import React, { PropTypes } from 'react';
import Checkbox from '../Checkbox';

function Type () {

  return (
    <div className="text-container flex-wrapper flex-column">
      <Checkbox> <h1> cms </h1></Checkbox>
      <Checkbox> <h1> ecommerce </h1> </Checkbox>
    </div>
  );
}

Type.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};

export default Type;
