import React from 'react';
import './Container.scss';
import { connect } from 'react-redux';
import { userAction } from './actions/userActions';
import { counterAction } from './actions/counterActions';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.onUserAction = this.onUserAction.bind(this);
    this.onCounterAction = this.onCounterAction.bind(this);
  }

  onUserAction(){
    console.log('LLAMO')
    this.props.onUserAction();
  }

  onCounterAction() {
    this.props.onCounterAction();
  }

  render(){ 
    console.log('THIS.PROPSSS', this.props);
    console.log('onUserAction: ', typeof this.props.onUserAction)
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
              >
                Decrement
              </button>
              <button 
                className="button-decrement" 
                type="button"
                onClick={this.onCounterAction}
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
  onCounterAction: counterAction
}

export default connect(mapStateToProps, mapActionsToProps)(Container);