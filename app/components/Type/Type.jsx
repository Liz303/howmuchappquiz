import React, { PropTypes } from 'react';
import Checkbox from '../Checkbox';

function Type () {

  return (
    <div className="text-container flex-wrapper flex-column">
      <Checkbox> CMS </Checkbox>
      <Checkbox> Ecommerce </Checkbox>
    </div>
  );
}

Type.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};

export default Type;
