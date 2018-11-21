import React from "react";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        Už jste klikli {this.state.counter}x.
        <button /*onWheel*/ onClick={e => this.handleClicl(e)}>Klikni</button>
      </div>
    );
  }

  handleClicl(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
}
