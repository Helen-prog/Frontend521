import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor");      
        this.state = {
            count: 0
        }  
    }

    add = () => {
        let val = this.state.count;
        val++;
        this.setState({count: val});
    }

    componentDidMount(){
        console.log("component Did Mount");        
    }

    componentDidUpdate(){
        console.log("component Did Update");        
    }

    render(){
        console.log("render");
        
        return(
            <>
                {
                    console.log("return")                    
                }
                <div>
                    <button onClick={this.add}>Добавить</button>
                </div>
                <div>
                    {
                        this.state.count
                    }
                </div>
            </>
        )
    }
}

export default Test;