import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            validSignup: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then((res) => {
                if (res.type === "RECEIVE_ERRORS") {
                    return this.setState({ validSignup: false })
                } else {
                    
                    return this.props.history.push("/")
                }
            })
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <ul className="errors-list">
                {this.props.errors.map((error, i) => (
                    <li className="error" key={`error-${i}`}>
                        <p className="red-exclamation">!</p><p className="error-text">{error}</p>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
                <div className="signup-form">
                <div className="blugle-signup-logo-container"><img className="blugle-logo" src={window.blugleLogoURL} alt="blugle-logo" /></div>
                    <h2 className="signup-message-h2">Create your Blugle Account</h2>
                    <h4 className="signup-message-h4">to continue to BluTube</h4>
                    <form>
                        <label>
                            <input
                                className="name-signup-input"
                                type="text"
                                placeholder="Name"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                            
                        </label>
                        <br/>
                        <label>
                            <input
                                className="email-signup-input"
                                placeholder="Your Email Address"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <br/>
                        <label>
                            <input
                                type="password"
                                className="pw-signup-input"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <br/>
                            <div className="signup-errors">{this.renderErrors()}</div>
                            <button className="signup-submit" onClick={this.handleSubmit}>Sign Up!</button>
                        </label>
                    </form>
                    <Link className="back-to-login-button" to="/login">
                        Sign in instead
                    </Link>
                </div>
        );
    }
}

export default Signup;
