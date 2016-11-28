import React from 'react';

export default class MoneyRain extends React.Component {
  randRange( val ) {
    return Math.random() * val | 0;
  }

  renderMonies() {
    let moneyArray=[];
    for( let i=1; i<16; i++ ) {
      let dropLeft = this.randRange(100) + '%';
      let dropTop = -this.randRange(20) + '%';
      let dropDuration = (Math.random()*10)+0.5 + 's';
      let moneyStyle = {
        left: dropLeft,
        top: dropTop,
        animationDuration: dropDuration
      };
      moneyArray.push(
        <div key={i} style={moneyStyle} className="drop"> $ </div>
      );
    }
    return moneyArray;
  }

  render() {
    return (
      <div className="rain">
        {this.renderMonies()}
      </div>
    );
  }
}

MoneyRain.propTypes = {
  children: React.PropTypes.array
};
