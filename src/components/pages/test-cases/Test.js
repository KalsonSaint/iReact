import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }

  //   componentWillMount() {
  //     console.log("Before Render");
  //   }

  //   componentWillUpdate() {
  //     console.log("Before Update");
  //   }

  //   componentDidUpdate() {
  //     console.log("After Update");
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (nextState.title === "React-Boss") {
  //       return true;
  //     }
  //     return false;
  //   }

  //   componentWillReceiveProps() {
  //     console.log("Before Received Props");
  //   }

  //   componentWillUnmount() {
  //     console.log("Unmount");
  //   }

  render() {
    // console.log("RENDER");
    const { title, body } = this.state;
    return (
      <div>
        <h3 className="p-4 text-center text-uppercase text-warning bg-dark">
          {title}
        </h3>
        <p className="text-secondary">{body}</p>
      </div>
    );
  }
}

export default Test;
