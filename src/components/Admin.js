import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let LoggedIn = true;
    if (token == null) {
      LoggedIn = false;
    }
    this.state = {
      LoggedIn: "",
      file: null,
      name: "saurav",
      phone: "7002289653",
      number: "23",
      email: "alex.89@gmail.com",
      LoggedIn: "",
      count: 0,
      comment: "",
      comments: [],
      files: [],
      urls: [],
      isDragging: false,
      isdisplay: false,
      imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCSI-ZQWtEW20M2PHVkYhUwxwu_viehZzbKTKKtNVH2xeGtgmU&usqp=CAU'
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  uploadSingleFile(e) {
    this.setState({
      imgPath: URL.createObjectURL(e.target.files[0]),
    });
  }

  upload(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handleChangeNumber(e) {
    this.setState({
      number: e.target.value,
    });
  }
  handleChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  handleChangeComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  handleClick() {
    let comments = [...this.state.comments];
    comments.push(this.state.comment);
    this.setState({
      comments,
      comment: "",
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { Username, Password } = this.state;
    if (Username === "saurav" && Password === "saurav97") {
      localStorage.setItem("token", "xxxxxxxxxxxxx");
      this.setState({
        LoggedIn: true,
      });
    }
  }
  changeDisplay = () => {
    this.setState({ isdisplay: !this.state.isdisplay });
  };
  render() {
    if (this.state.LoggedIn === false) {
      return <Redirect to="/editprofile" />;
    }
    let imgPreview;
    if (this.state.file) {
      imgPreview = <img src={this.state.file} alt="" />;
    }

    return (
      <div>
        {!this.state.isdisplay ? (
          <div>
            <h2>Welcome to profile page</h2>
            <img
              src={this.state.imgPath}
              className="img"
            />

            <button onClick={this.incrementMe} className="likebutton">
              Likes : <i className="fa fa-heart" aria-hidden="true"></i>{" "}
              {this.state.count}
            </button>
            <form>
              <div className="form-group preview">{imgPreview}</div>

              <div className="form-group">
                <input
                  type="file"
                  className="file"
                  onChange={this.uploadSingleFile}
                />
              </div>
          
            </form>
            {console.log(this.state.comments)}
            <h6>
              {this.state.comments.length > 0
                ? this.state.comments.map((item) => <div>{item}</div>)
                : null}
            </h6>
           
            <input
              type="text"
              id="input"
              required
              value={this.state.comment}
              placeholder="Write a comment ..."
              onChange={this.handleChangeComment}
              className="detailss"
            />
             <button onClick={this.handleClick} className="adminsubmit">
              Submit
            </button>

            <h5>Name:{this.state.name}</h5>
            <h5>Age:{this.state.number}</h5>
            <h5>Phone No:{this.state.phone}</h5>
            <h5>Email:{this.state.email}</h5>
            <div>
          <Link to="/admin">
        
            <button
              type="button"
              onClick={this.changeDisplay}
              className="editprofile"
            >
              EDIT PROFILE
            </button>
          </Link>
          <Link to="/logout">
            <button type="button" className="logout">
              LOGOUT
            </button>
          </Link>
        </div>
          </div>
        ) : (
          <div>
            <h1>Editprofile</h1>
            <form onSubmit={this.submitForm}>
              <label>
                <input
                  type="text"
                  id="input"
                  required
                  value={this.state.name}
                  placeholder="Enter your name"
                  pattern="\S+.*"
                  onChange={this.handleChangeName}
                  className="detailsedit"
                />
              </label>

              <br />
              <label>
                <input
                  type="number"
                  id="input"
                  required
                  value={this.state.number}
                  placeholder="Enter your age"
                  pattern="\S+.*"
                  onChange={this.handleChangeNumber}
                  className="detailsedit"
                />
              </label>
              <br />
              <label>
                <input
                  type="number"
                  id="input"
                  required
                  value={this.state.phone}
                  placeholder="Enter your number"
                  pattern="\S+.*"
                  onChange={this.handleChangePhone}
                  className="detailsedit"
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  id="input"
                  required
                  value={this.state.email}
                  placeholder="Enter your email"
                  pattern="\S+.*"
                  onChange={this.handleChangeEmail}
                  className="detailsedit"
                />
              </label>
              <br />
              <br />
              <Link to="/admin">
                <button
                  type="button"
                  onClick={this.changeDisplay}
                  className="sumbmitChange"
                >
                  SUBMIT CHANGES
                </button>
              </Link>
            </form>
          </div>
        )}
      </div>
          
    );
  }
}
