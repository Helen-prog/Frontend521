import React from "react";

class Form extends React.Component{
    state = {
        firstName: "",
        email: ""
    }    

    update = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const {firstName, email} = this.state;
        return (
            <>
                <hr />
                <form>
                    <input name="firstName" value={firstName} onChange={this.update} /> <br />
                    <input name="email" value={email} onChange={this.update} />
                </form>
                <hr />
                <p>{firstName}</p>
                <p>{email}</p>
            </>
        )
    }
}

export default Form;