import React from 'react';

export default class Checkbox extends React.Component {
  constructor(...args){
    super(...args);
    this.state = {
      isChecked: false
    };
  }

  toggleChecked(e) {
    e.target.checked;
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    let checkboxStyle = `styled-checkbox ${this.state.isChecked ? 'checked' : ''}`;
    return (
      <div className="checkbox-wrap">
        <label className="checkbox">
          <input type="checkbox"
                 name={this.props.children}
                 onChange={ this.toggleChecked.bind(this) } />
               <div className={checkboxStyle}/>
          <div className="checkbox-name"> {this.props.children} </div>
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  children: React.PropTypes.object
};
