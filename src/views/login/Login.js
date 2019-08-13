import React, { PureComponent } from "react";

import { Input } from "antd";
import { withRouter } from "react-router-dom";


class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      successed: false,
      inputCURP: "",
      inputLast: ""
    };
  }

  onChange = e => {
    this.setState({
      inputCURP: e.target.value
    });
  };

  login = () => {
    this.setState({
      successed: true
    });
  };

  render() {
    const Button = withRouter(({ history }) => (
      <button
        type="button"
        onClick={() => {
          history.push("/");
          window.location.reload();
        }}
      >
        Acceder
      </button>
    ));

    return (
      <div className="login__container">
        <div>
            <div className="authentication__container">
              <p>Ingresa el código</p>
              <div>
                <input
                  type="number"
                  onChange={e => {
                    this.setState({
                      firstInput: e.target.value
                    });
                  }}
                  maxLength={1}
                />
                <input
                  type="number"
                  onChange={e => {
                    this.setState({
                      secondInput: e.target.value
                    });
                  }}
                  maxLength={1}
                />
                <input
                  onChange={e => {
                    this.setState({
                      thirdInput: e.target.value
                    });
                  }}
                  maxLength={1}
                />
                <input
                  type="number"
                  onChange={e => {
                    this.setState({
                      fourthInput: e.target.value
                    });
                  }}
                  min="0"
                  max="9 "
                  maxlength="1"
                />
                <input
                  block={this.state.inputLast.length < 1 ? false : true}
                  min="0"
                  max="9"
                  type="number"
                  onChange={e => {
                    this.setState({
                      inputLast: e.target.value
                    });
                  }}
                  maxlength="1"
                />
              </div>
              <Button />
            </div>
          
        </div>
      </div>
    );
  }
}

export default Login;
