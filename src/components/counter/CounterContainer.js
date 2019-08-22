import React from 'react';
import './Container.scss';
import { connect } from 'react-redux';
import { 
  incrementCounterAction, 
  decrementCounterAction 
} from '../actions/incrementCounterAction';

/**
 * CounterContainer
 *
 * @author angelonimartin90@gmail.com
 */
class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrementCounterAction = this.onIncrementCounterAction.bind(this);
    this.onDecrementCounterAction = this.onDecrementCounterAction.bind(this);
  }

  /**
  * @name onIncrementCounterAction
  * method responsible of call increment action
  * @author angelonimartin90@gmail.com
  */
  onIncrementCounterAction() {
    this.props.onIncrementCounterAction();
  }

  /**
  * @name onDecrementCounterAction
  * method responsible of call decrement action
  * @author angelonimartin90@gmail.com
  */
  onDecrementCounterAction() {
    this.props.onDecrementCounterAction();
  }

  render(){
    return(
      <div className="increment-decrement-container">
        <div className="button-container-center">
          <div className="counter-show__div">
            <p>
              {this.props.counter}
            </p>
            {this.props.counter === 10 && (
              <p>
                {this.props.user}
              </p>  
            )}
          </div>
          <div className="button-container-row">
            <button
              className="button-decrement"
              type="button"
              onClick={this.onDecrementCounterAction}
            >
              - Decrement
            </button>
            <button 
              className="button-increment" 
              type="button"
              onClick={this.onIncrementCounterAction}
            >
              + Increment
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
  counter: state.counter
});

const mapActionsToProps = {
  onIncrementCounterAction: incrementCounterAction,
  onDecrementCounterAction: decrementCounterAction
}

export default connect(mapStateToProps, mapActionsToProps)(CounterContainer);