import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  render() {
    return (
      <div>
        <p>Class Component count - {this.state.count}</p>
        <button type="button" onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}

export default ClassComponent;
