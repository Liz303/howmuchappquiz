import React from 'react';

export default class MoneyRain extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      winWidth: this.defaultWidth,
      winHeight: this.defaultHeight
    };
    // this.resizeHandler = this.resizeHandler.bind(this);
  }

  // componentDidMount() {
  //   if (window){
  //     window.addEventListener('resize', this.resizeHandler);
  //   }
  // }
  //
  // componentWillUnmount() {
  //   if (window) {
  //     window.removeEventListener('resize', this.resizeHandler);
  //   }
  // }

  get defaultWidth() {
    // if (window) {
    //   return window.innerWidth;
    // }
    return 1600;
  }

  get defaultHeight() {
    // if (window) {
    //   return window.innerHeight;
    // }
    return 1200;
  }

  randRange( val ) {
    return Math.random() * val | 0;
    // return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  // resizeHandler() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  renderMonies() {
    let moneyArray=[];
    for( let i=1; i<16; i++ ) {
      let dropLeft = this.randRange(100) + '%';
      let dropTop = -this.randRange(20) + '%';
      let dropDuration = (Math.random()*2)+0.5 + 's';
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
