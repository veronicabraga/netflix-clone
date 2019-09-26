import React, { Component } from 'react';
import { HashRouter as Link, NavLink } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let currentAccount = JSON.parse(localStorage.getItem(this.state.email));
        if(currentAccount !== null && currentAccount.password === this.state.password && this.state.password !== "") {
          localStorage.setItem("current_user_email", this.state.email);
          this.props.history.push("/movies/list");
        }
    }



    render() {
        return (
          <div className="App">
            <div className="NetflixLogo">
              <h1> NETFLIX</h1>
            </div>
            <div className="App__Form">

              <div className="PageSwitcher">
                  <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                  <NavLink exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink> or <NavLink exact to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                  <div className="FormField">
                      <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                      <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>

                  <div className="FormField">
                      <button className="FormField__Button mr-20">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;
