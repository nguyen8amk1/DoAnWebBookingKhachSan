import React from "react";
import { gethello, posthello } from "../../api/TestApi";

class Test extends React.Component {
  state = {
    hello: "",
  };

  // const result = await axios.get('http://127.0.0.1:8080/hello');
  // console.log(result);

  async componentDidMount() {
    try {
      const hello = await gethello();
      console.log(hello);
      this.setState({ hello: hello });
    } catch (error) {
      this.setState({ hello: "nothing" });
    }

    try {
      await posthello("helloserver");
      console.log(this.state.hello);
    } catch (error) {
      console.log("ERROR: Can't post to server!!");
    }
  }

  render() {
    return (
      <>
        <h2>Hi, I am a {this.state.hello}!</h2>;
      </>
    );
  }
}

export default Test;
