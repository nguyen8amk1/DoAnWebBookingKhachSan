import axios from 'axios';
import React from 'react'

class Test extends React.Component {
    state = {
        ditme: ""
    }

        // const result = await axios.get('http://127.0.0.1:8080/ditme');
        // console.log(result);

    async componentDidMount() {
        const response = await axios.get('http://127.0.0.1:8080/ditme');
        console.log(response.data);
        this.setState({ditme: response.data});

        await axios.post('http://127.0.0.1:8080/post-crud', {
            message: "ditmeserver"
        });


        console.log(this.state.ditme);
    }

    render() {
      return <>
        <h2>Hi, I am a {this.state.ditme}!</h2>;
      </>
    }
}

export default Test;