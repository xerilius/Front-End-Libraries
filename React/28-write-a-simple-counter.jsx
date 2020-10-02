// React: Write a Simple Counter

// You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.

// The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0.

// Note: Make sure you don't modify the classNames of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor.

// Counter should return a div element which contains three buttons with text content in this order Increment!, Decrement!, Reset.
// The state of Counter should initialize with a count property set to 0.
// Clicking the increment button should increment the count by 1.
// Clicking the decrement button should decrement the count by 1.
// Clicking the reset button should reset the count to 0.



// original 
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // change code below this line
  
      // change code above this line
    }
    // change code below this line
  
    // change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

  

// answer 
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      // change code above this line
    }
    // change code below this line
    increment() {
      this.setState(state => ({count: state.count + 1}))
    }
    decrement() {
      this.setState(state => ({count: state.count - 1}))
    }
    reset() {
      this.setState(state => ({count: 0}))
    }
    // change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
  