import React from "react";
import {ReactComponent as Logo} from "../../Images/instagram.svg";
class Login extends React.Component {
    
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {;
    const {name,value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
  };
    

  render() {
    return (
      <div>
        <div>
          <Logo/>
        </div>
        <div>
          <form onSubmit>
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              onChange={this.handleSubmit}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              onChange={this.handleSubmit}
            />
            <button onSubmit onChange={this.handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;