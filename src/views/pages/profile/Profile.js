import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
} from "reactstrap";
// import axios from "axios";
import swal from "sweetalert";
import { Check } from "react-feather";
// import { Route } from "react-router-dom";
import axios from "axios";
import "../../../assets/scss/pages/users-profile.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      // resetpassword: "",
      // password: "",
      img: "",
      selectedName: "",
      selectedFile: null,
      approvedstatus: "",

      data: {},
    };
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    let astroId = localStorage.getItem("astroId");
    console.log(astroId);
    axios
      .get(`http://13.234.48.35:8000/admin/getoneAstro/${astroId}`)
      .then((response) => {
        console.log(response.data.data);
        console.log(response);
        this.setState({
          data: response.data.data,
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          img: response.data.data.img,
          password: response.data.data.password,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    // data.append("password", this.state.password);
    // data.append("resetpassword", this.state.resetpassword);
    if (this.state.selectedFile !== null) {
      data.append("img", this.state.selectedFile, this.state.selectedName);
    }

    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }

    let astroId = localStorage.getItem("astroId");
    axios
      .post(
        `http://13.234.48.35:8000/user/editAstroDetails/${astroId}`,
        data
      )
      .then((response) => {
        console.log(response.data.data);
        console.log(response);
        this.setState({
          data: response.data.data,
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          img: response.data.data.img,
          password: response.data.data.password,
        });
        swal("Success!", "Edited SuccessFull!", "success");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
          breadCrumbParent="Pages"
          breadCrumbActive="Profile"
        />
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  <img
                    src={this.state.data.img}
                    alt="porfileImg"
                    className="img-fluid img-border rounded-circle box-shadow-1 rt-1"
                  />
                  <ul className="lst-1">
                    <li className="lst-2">
                      Name:{" "}
                      <span className="lst-3">{this.state.data.fullname}</span>
                    </li>
                    <li className="lst-2">
                      Mobile:{" "}
                      <span className="lst-3">{this.state.data.mobile}</span>
                    </li>
                    <li className="lst-2">
                      Email:{" "}
                      <span className="lst-3">{this.state.data.email}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>
                    <Row className="m-0">
                      <Col sm="12" className="p-0">
                        <Form action="/">
                          <Label>Name</Label>
                          <Input
                            type="text"
                            name="fullname"
                            placeholder="Name"
                            value={this.state.fullname}
                            onChange={this.changeHandler}
                          />
                          <br></br>
                          <Label>Email</Label>
                          <Input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                          />
                          <br></br>
                          <Label>Mobile No.</Label>
                          <Input
                            type="number"
                            name="mobile"
                            placeholder="Mobile No."
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                          />
                          <br></br>
                          {/* <Label>Password</Label>
                          <Input
                            type="password"
                            name="password"
                            placeholder="Reset password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                          /> */}
                          <Label>User Image</Label>
                          <Input
                            className="form-control"
                            type="file"
                            name="img"
                            onChange={this.onChangeHandler}
                          />
                          <br></br>
                          <CheckBoxesVuexy
                            color="primary"
                            icon={<Check className="vx-icon" size={16} />}
                            label=" I accept the terms & conditions."
                            defaultChecked={true}
                          />
                          <br></br>
                          <div className="d-flex justify-content-between">
                            <Button.Ripple color="primary" type="submit">
                              Submit
                            </Button.Ripple>
                          </div>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Profile;
