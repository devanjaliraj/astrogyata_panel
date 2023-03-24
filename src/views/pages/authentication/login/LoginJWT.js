import React from "react";
// import { Link } from 'react-router-dom'
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap";
import { Phone } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";
// import axios from "axios";
import { Route } from "react-router-dom";
import swal from "sweetalert";
// import { history } from '../../../../history'
import axiosConfig from "../../../../axiosConfig";

class LoginJWT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      otpMsg: "",
      otp: "",
    };
  }
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    axiosConfig
      .post("/user/loginsendotp", {
        mobile: this.state.mobile,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ otpMsg: response.data.msg });
        if (response.data.msg === "Waiting for Admin Approval") {
          swal("Waiting for Admin Approval");
        }
      })
      .catch((error) => {
        console.log(error.response);
        swal(
          "error!",
          "Invalied! Please enter valied Phone No. or Password",
          "error"
        );
      });
  };
  handleOtp = (e) => {
    e.preventDefault();
    axiosConfig
      .post("/user/loginVerify", {
        mobile: this.state.mobile,
        otp: this.state.otp,
      })

      .then((response) => {
        console.log(response.data);
        console.log(response.data._id);
        if (response.data.msg === "otp verified") {
          swal("Login Successfull");
          localStorage.setItem("astroId", response.data._id);
          // localStorage.setItem("user_id", response.data.data._id);
          // this.props.history.push("/");
          window.location.replace("/#/");
          // swal("Login Successfull");
        }
      })
      .catch((error) => {
        console.log(error.response.data._id);
        swal(
          "error!",
          "Invalied! Please enter valied Phone No. or Password",
          "error"
        );
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.otpMsg === "otp Send Successfully" ? (
          <CardBody className="pt-1">
            <Form onSubmit={this.handleOtp}>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Input
                  type="number"
                  name="otp"
                  placeholder="Enter OTP"
                  value={this.state.otp}
                  onChange={this.handlechange}
                // required
                />

                <Label>Phone</Label>
              </FormGroup>

              <div className="d-flex justify-content-center">
                <Route
                  render={({ history }) => (
                    <Button.Ripple color="primary" type="submit">
                      Login
                    </Button.Ripple>
                  )}
                />
              </div>
            </Form>
          </CardBody>
        ) : (
          <CardBody className="pt-1">
            <Form onSubmit={this.handleLogin}>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Input
                  type="number"
                  maxLength={10}
                  name="mobile"
                  placeholder="Enter here your  valid Mobile Number"
                  value={this.state.mobile}
                  onChange={this.handlechange}
                />
                <div className="form-control-position">
                  <Phone size={15} />
                </div>
                <Label>Phone</Label>
              </FormGroup>

              <div className="d-flex justify-content-center">
                <Route
                  render={({ history }) => (
                    <Button.Ripple color="primary" type="submit">
                      Get OTP
                    </Button.Ripple>
                  )}
                />
              </div>
            </Form>
          </CardBody>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT);
