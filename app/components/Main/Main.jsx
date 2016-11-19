import React from 'react';
import { Link } from 'react-router';

function Main () {
  return (
    <div className="text-container flex-wrapper flex-column">
      <h1> How much should I spend on a web app? </h1>
      <div className="flex-column-item-end">
        <Link to="/type"> Get Started </Link>
      </div>
    </div>
  );
}

export default Main;
