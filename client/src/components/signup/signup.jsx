import React from "react";
import { signup } from "../../API/user";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phNo: '',
            password: '',
            rePassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let {name, email, phNo, password,rePassword} = this.state;
        if (name && name.trim() && email && email.trim() 
        && phNo && phNo.trim() && password && password.trim() 
        && rePassword && rePassword.trim() && password.trim() == rePassword.trim()) {
            console.log('this.state', this.state)
            signup({
                name, 
                email, 
                phNo, 
                password
            }).then((userResp) => {
                console.log('userResp', userResp)
                this.setState({})
                alert('User registered!')
            })
            .catch(err => console.log(err))
        } else {
            alert(' Invalid user data')
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Please input name"/>
                </label>
                <label>
                    Email: <input name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Please input name"/>
                </label>
                <label>
                    Phone No. : <input name="phNo" type="tel" value={this.state.phNo} onChange={this.handleChange} placeholder="Please input name"/>
                </label>
                <label>
                    Password: <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Please input name"/>
                </label>
                <label>
                    Re enter Password: <input name="rePassword" type="password" value={this.state.rePassword} onChange={this.handleChange} placeholder="Please input name"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default SignUp;

