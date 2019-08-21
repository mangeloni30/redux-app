import React from 'react';
import './Container.scss';
import { connect } from 'react-redux';
import { userAction } from './actions/userActions';
import { 
  incrementCounterAction, 
  decrementCounterAction 
} from './actions/incrementCounterAction';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.onUserAction = this.onUserAction.bind(this);
    this.onIncrementCounterAction = this.onIncrementCounterAction.bind(this);
    this.onDecrementCounterAction = this.onDecrementCounterAction.bind(this);
  }

  onUserAction(){
    this.props.onUserAction();
  }

  onIncrementCounterAction() {
    this.props.onIncrementCounterAction();
  }

  onDecrementCounterAction() {
    this.props.onDecrementCounterAction();
  }

  render(){
    return(
      <div className="increment-decrement-container">
        <div>
          <div className="number-show">This is an example of Redux with increment and decrement</div>
          <label id="showLabel">Do a click in increment button</label>
          <div className="button-container-center">
            <div>{this.props.counter}</div>
            <div className="button-container-row">
              <button
                className="button-increment"
                type="button"
                onClick={this.onDecrementCounterAction}
              >
                Decrement
              </button>
              <button 
                className="button-decrement" 
                type="button"
                onClick={this.onIncrementCounterAction}
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

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
  counter: state.counter
});

const mapActionsToProps = {
  onUserAction: userAction,
  onIncrementCounterAction: incrementCounterAction,
  onDecrementCounterAction: decrementCounterAction
}

export default connect(mapStateToProps, mapActionsToProps)(Container);