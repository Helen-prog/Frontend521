import React from "react";

class User extends React.Component{

    componentWillUnmount(){
        alert("Пользователь удален");
    }

    render(){
        return (
            <div>
                <ul>
                    <li>Name: Ann</li>
                    <li>Email: test@mail.ru</li>
                    <li>Contact: +7 999 555-66-22</li>
                </ul>
            </div>
        )
    }
}

export default User;