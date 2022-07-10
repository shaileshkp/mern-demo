import React from "react";
import { login } from "../../API/user";
import './login.css';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        let {email, password } = this.state;
        if (email && email.trim() && password && password.trim()) {
            console.log('this.state', this.state)
            login({ 
                email, 
                password
            }).then((userResp) => {
                console.log('userResp', userResp)
                this.setState({})
                localStorage.setItem('IUT', JSON.stringify(userResp.data))
                alert('User Signin!')
            })
            .catch(err => console.log(err))
        } else {
            alert(' Invalid user data')
        }
    }

    render() {
        return (
            <div className="signup-container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: <input name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Please input name"/>
                    </label>
                    <label>
                        Password: <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Please input name"/>
                    </label>
                    <input type="submit" value="Login" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}


export default Login;

