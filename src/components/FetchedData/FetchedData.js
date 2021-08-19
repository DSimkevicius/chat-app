import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.jsonbin.io/b/611d1bd9076a223676ad6526/1")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            items: result.messages,
          });
        },
        () => {
          this.setState({});
        }
      );
  }

  render() {
    const { items } = this.state;

    const results = () => {
      return (
        <ul>
          {items.map((result) => (
            <p key={result.message}>{result.message}</p>
          ))}
        </ul>
      );
    };

    return results();
  }
}
