// React: Add Event Listeners
// The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.

// You've already been using some of these synthetic event handlers such as onClick(). React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.

// Attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeyPress(). You can use document.addEventListener() which takes the event (in quotes) as the first argument and the callback as the second argument.

// Then, in componentWillUnmount(), remove this same event listener. You can pass the same arguments to document.removeEventListener(). It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.

// MyComponent should render a div element which wraps an h1 tag.
// A keydown listener should be attached to the document in componentDidMount.
// The keydown listener should be removed from the document in componentWillUnmount.
// Once the component has mounted, pressing enter should update its state and the rendered h1 tag



// original
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
  
    }
    componentWillUnmount() {
  
    }
    // change code above this line
    handleEnter() {
      this.setState({
        message: this.state.message + 'You pressed the enter key! '
      });
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };


// answer
// This challenge has you modifying two lifecycle methods componentDidMount and componentWillUnmount. You use componentDidMount when you want to set something up, in your case, an event listener. You use componentWillUnmount when you need to clear that something, your event listener.

// You will add an event listener to the componentDidMount method that will listen to a “keydown” event. Use document.addEventListener(event, function, optional(useCapture)). Then remove this same event listener by passing in the same arguments into document.removeEventListener(event, function, optional(useCapture)) within the componentWillUnmount method.

// Note: document.addEventListener and document.removeEventListener will take in a quoted string for its event, and when passing in the function you will reference the function handleKeyPress() as this.handleKeyPress. If you invoke the function as this.handleKeyPress(), the event listener will evaluate the function first and will pass back a value of undefined.


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
    // change code above this line
    handleEnter() {
      this.setState({
        message: this.state.message + 'You pressed the enter key! '
      });
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };
  