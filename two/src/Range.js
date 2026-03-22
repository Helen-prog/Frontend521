import React from "react";

class Range extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            val: "10"  
        }
    }

    range = (event) => {
        this.setState({val: event.target.value})
    }

    render(){
        return(
            <div>
                <br />
                <input type="range" onInput={this.range} min="10" max="200" step="10" />
                <p>{this.state.val}</p>
            </div>
        )
    }
}

export default Range;