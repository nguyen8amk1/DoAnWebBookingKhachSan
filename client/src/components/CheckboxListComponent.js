import React from 'react'

class CheckboxListComponent extends React.Component {
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
                <input type="checkbox"name={this.props.name}/>
                <label >{val}</label>
            </p>
            ))}
        </>;
    }
}

export default CheckboxListComponent;