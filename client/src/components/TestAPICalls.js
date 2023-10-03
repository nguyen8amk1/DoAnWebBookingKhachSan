import React from 'react'
import { getDitme, postDitme } from '../api/TestApi';

class Test extends React.Component {
    state = {
        ditme: ""
    }

    // const result = await axios.get('http://127.0.0.1:8080/ditme');
    // console.log(result);

    async componentDidMount() {
        try {
            const ditme = await getDitme();
            console.log(ditme);
            this.setState({ ditme: ditme });
        } catch (error) {
            this.setState({ ditme: "nothing" });
        }

        try {
            await postDitme("ditmeserver");
            console.log(this.state.ditme);
        } catch (error) {
            console.log("ERROR: Can't post to server!!");
        }
    }

    render() {
        return <>
            <h2>Hi, I am a {this.state.ditme}!</h2>;
        </>
    }
}

export default Test;