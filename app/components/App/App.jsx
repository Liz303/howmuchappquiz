import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActions } from '../../actions';
import MoneyRain from '../MoneyRain';
// import Header from '../Header';

if (process.env.BROWSER) {
  require('../../stylesheets/defaults/content.scss');
}

function renderChildren (props) {
  return React.Children.map(props.children, function(child) {
    return React.cloneElement(child, {
      actions: props.actions,
      state: props.state
    } );
  });
}

function App (props) {
  return (
    <main>
      <MoneyRain/>
      <div className='content'>
        <div className='page-content'>
          { renderChildren(props) }
        </div>
      </div>
    </main>
  );
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  state: PropTypes.object.isRequired
};

export default connect(
  function mapStateToProps(state) { return { state: state }; },
  function mapDispatchToProps(dispatch) { return { actions: bindActions(dispatch) }; }
)(App);
