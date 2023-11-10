import React from 'react'

class RadioListComponent extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            selectedValue: ""
        }
    }

    componentDidMount() {

    }
    
    render() {
        return <>
          { this.props.labels.map((val, index) => (
            <p key={index}>
                <input type="radio"name={this.props.name}/>
                <label >{val}</label>
            </p>
            ))}
        </>;
    }
}

export default RadioListComponent;