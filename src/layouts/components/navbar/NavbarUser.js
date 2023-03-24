import React from "react";
import { useState, useEffect } from "react";
import "../../../assets/scss/pages/users.scss";
import {
  UncontrolledDropdown,
  Badge,
  Media,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import * as Icon from "react-feather";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Bell } from "react-feather";
import "moment-timezone";
import moment from "moment";

const handleNavigation = (e, path) => {
  e.preventDefault();
  // history.push(path);
  window.location.replace(path);
};

const NavbarUser = () => {
  const [profilepic, setProfilepic] = useState([]);
  const [astronotification, setAstronotification] = useState([]);
  const [viewnotify, setViewnotify] = useState("");

  // console.log(notifications);
  useEffect(() => {
    // const astroId = localStorage.getItem("astroId");
    // const getOneUser = () => {
    //   axios
    //     .get(`http://13.235.180.192:8000/admin/getoneAstro/${astroId}`)
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    async function getOneUser() {
      try {
        //axiosConfig.get(`/dlt_startup/${id}`)
        const astroId = localStorage.getItem("astroId");
        const data = await axiosConfig.get(
          `/admin/getoneAstro/${astroId}`
        );
        // /admin/viewoneadmin/${userId}
        console.log(data.data.data);
        setProfilepic(data.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }

    async function getAllnotification() {
      try {
        //axiosConfig.get(`/dlt_startup/${id}`)
        const astroId = localStorage.getItem("astroId");
        const data = await axiosConfig.get(
          `/user/requested_notification/${astroId}`
        );
        // /admin/viewoneadmin/${userId}
        console.log(data.data.data);
        setAstronotification(data.data.data);
        setViewnotify(data.data.count);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }

    getOneUser();
    getAllnotification();
  }, []);

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      {/* notification */}

      <UncontrolledDropdown className="dropdown-notification nav-item" tag="li">
        <DropdownToggle
          tag="a"
          data-toggle="dropdown"
          // aria-expanded={this.state.dropdownNotification}
          className="nav-link nav-link-label"
        >
          <Bell size={21} />
          <Badge pill color="primary" className="badge-up">
            {" "}
            {viewnotify}{" "}
          </Badge>
        </DropdownToggle>
        <DropdownMenu tag="ul" right className="dropdown-menu-media">
          <li className="dropdown-menu-header">
            <div className="dropdown-header mt-0">
              <h3 className="text-white">{viewnotify}</h3>
              <span className="notification-title"> Notifications</span>
            </div>
          </li>
          <PerfectScrollbar
            className="media-list overflow-hidden position-relative"
            options={{
              wheelPropagation: false,
            }}
          >
            <div className="">
              {astronotification.map((data, i) => (
                <Media className="dddddfd">
                  <Media left href="#">
                    {/* <PlusSquare className="font-medium-5 primary" size={21} /> */}
                    <Bell size={21} />
                  </Media>
                  <Media body>
                    <Media heading className="success media-heading" tag="h6">
                      {data.userid?.fullname}
                      <smaill className="notification-text ml-1">
                        ({data.userid?.mobile})
                      </smaill>
                    </Media>
                    <small className="notification-text">
                      <p className="mb-0">
                        Request for: <span>{data.type}</span>
                      </p>
                    </small>
                    <div className="bottom-tag">
                      <Button className="success media-heading gt-1">
                        Accept
                      </Button>
                      <Button className="denger media-heading gt-2">
                        Reject
                      </Button>
                    </div>
                  </Media>
                  <small>
                    <time
                      className="media-meta"
                      dateTime="2015-06-11T18:29:20+08:00"
                    >
                      {/* {data.createdAt} */}
                      {moment(data.createdAt).format("ll")}
                    </time>
                  </small>
                </Media>
              ))}
            </div>
          </PerfectScrollbar>
          <li className="dropdown-menu-footer">
            <DropdownItem tag="a" className="p-1 text-center">
              {" "}
              Read all notifications{" "}
            </DropdownItem>
          </li>
        </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            {/* <span className="user-name text-bold-600">Astro</span> */}
            {profilepic?.fullname}
            {/* <span className="user-status">Available</span> */}
          </div>
          <span data-tour="user">
            <img
              src={profilepic?.img}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        {/* {/ <UserDropdown {...this.props} /> /} */}
        <DropdownMenu right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => handleNavigation(e, "/#/pages/profile")}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>

          <DropdownItem divider />
          <Route
            render={({ history }) => (
              <DropdownItem
                tag="a"
                onClick={(e) => {
                  localStorage.removeItem("astroId");
                  window.location.replace("/#/pages/login");
                }}
              >
                <Icon.Power size={14} className="mr-50" />
                <span className="align-middle">LogOut</span>
              </DropdownItem>
            )}
          />
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;
