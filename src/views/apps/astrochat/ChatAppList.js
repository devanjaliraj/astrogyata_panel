import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
// import Buyimg from "../../../assets/img/boy-img.png";
// import Countdown from "react-countdown";

class ChatAppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {},
      userChatList: this.props.userChatList,
      roomid: ''
    };
  }

  render() {
    const { userChatList } = this.props;
    console.log('console.log', this.props.userChatList)
    return (
      <ul>
        {userChatList.length
          ? userChatList.map((user, i) => {

            return (
              <li>
                <div className="imglf" onClick={() => this.props.getChatRoomId(user, i)}>
                  <img src={user.userid?.userimg} className="app-img" alt="" />
                </div>
                <div className="lst-con">
                  <h5>{user.userid?.fullname}</h5>
                  <p>{user.msg}</p>
                </div>
              </li>
            );
          })
          : null}
        {/* <li>
          <div className="imglf">
            <img src={Buyimg} className="app-img" />
          </div>
          <div className="lst-con">
            <h5> namehghghghg</h5>
            <p>lorem</p>
          </div>
        </li> */}
      </ul>
    );
  }
}

//   ReactDOM.render(
//     <ChatApp />,
//     document.getElementById('root')
//   );

export default ChatAppList;
