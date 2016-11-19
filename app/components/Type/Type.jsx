import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioGroup from '../RadioGroup';

function Type () {
  let data = [{value: 'cms'}, {value: 'ecommerce'}];
  return (
    <div className="text-container flex-wrapper flex-column">
      <h1> What type of app are you building? </h1>
      <RadioGroup data={data}/>
      <div className="flex-column-item-end">
        <Link to="/type"> Next ➪</Link>
      </div>
    </div>
  );
}

Type.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object
};

export default Type;
