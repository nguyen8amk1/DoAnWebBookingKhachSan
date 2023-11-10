import React from 'react'

class PlusMinusComponent extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {

    }
    
    incrementCount = () => {
        this.setState({ count: this.state.count + 1});
    }

    decrementCount = () => {
        // TODO: having bugs right here :v, can't go negative :v  
        const canGoNegative = this.props.positive == undefined;
        if(this.state.count > 0)
            this.setState({ count: this.state.count - 1});
        else if(this.canGoNegative)
            this.setState({ count: this.state.count - 1});
    }

    render() {
        return <>
        <div>
            <label>{this.props.label}</label>
            <button onClick={this.incrementCount}>+</button>
            <input style={{width: '2em'}}value={this.state.count}/>
            <button onClick={this.decrementCount}>-</button>
        </div>
        </>;
    }
}

export default PlusMinusComponent;