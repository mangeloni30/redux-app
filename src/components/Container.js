import React from 'react';
import './Container.scss';

class Container extends React.Component {

  render(){
    return(
      <div className="increment-decrement-container">
        <div>
          <div className="number-show">This is an example of Redux with increment and decrement</div>
          <label id="showLabel">Do a click in increment button</label>
          <div className="button-container-center">
            <div></div>
            <div className="button-container-row">
              <button
                className="button-increment"
                type="button"
              >
                Decrement
              </button>
              <button 
                className="button-decrement" 
                type="button"
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container;