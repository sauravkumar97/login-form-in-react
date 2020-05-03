// import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// export default class Editprofile extends Component {
//   constructor(props) {
//     super(props);
//     let LoggedIn = false;
//     this.state = {
//       Username: "",
//       number: "",
//       phone: "",
//       email: "",
//       LoggedIn: ""
      
//     };
//     this.handleChangeName= this.handleChangeName.bind(this);
//     this.handleChangeNumber = this.handleChangeNumber.bind(this);
//     this.handleChangePhone = this.handleChangePhone.bind(this);
//     this.handleChangeEmail = this.handleChangeEmail.bind(this);
//     this.submitForm = this.submitForm.bind(this); 
//   }
//   handleChangeName(e) {
//     this.setState({
//       Username: e.target.value,
//     });
//   }
//   handleChangeNumber(e) {
//     this.setState({
//       number: e.target.value,
//     });
//   }
//   handleChangePhone(e) {
//     this.setState({
//       phone: e.target.value,
//     });
//   }
//   handleChangeEmail(e) {
//     this.setState({
//      email: e.target.value,
//     });
//   }
  

//   submitForm(e) {
//     e.preventDefault();
//     const { Username, Password } = this.state;
//     if (Username === "saurav" && Password === "saurav97") {
//       localStorage.setItem("token", "xxxxxxxxxxxxx");
//       this.setState({
//         LoggedIn: true,
//       });
//     }
//   }

//   render() {
//     if (this.state.LoggedIn) {
//       return <Redirect to="/admin" />;
//     }

//     return (
//       <div>
//         <h1 className="txt">Editprofile</h1>
//         <form  onSubmit={this.submitForm}>
//           <input
//             type="text"
//             id="input"
//             required 
//             value={this.state.Username}
//             placeholder="Enter your name"
//             className="input"
//             pattern="\S+.*"
//             onChange={this.handleChangeName}
//           />
//           <br />
//           <input
//             type="number"
//             id="input"
//             required 
//             value={this.state.number}
//             placeholder="Enter your age"
//             className="input"
//             pattern="\S+.*"
//             onChange={this.handleChangeNumber}
//           />
//           <br />
//           <input
//             type="number"
//             id="input"
//             required 
//             value={this.state.phone}
//             placeholder="Enter your number"
//             className="input"
//             pattern="\S+.*"
//             onChange={this.handleChangePhone}
//           />
//           <br />
//           <input
//             type="text"
//             id="input"
//             required 
//             value={this.state.email}
//             placeholder="Enter your email"
//             className="input"
//             pattern="\S+.*"
//             onChange={this.handleChangeEmail}
//           />
//           <br />
//           <br />
//           <Link to="/admin" className="submitchange">
//             <button type="button">SUBMIT CHANGES</button>
//           </Link>
//         </form>
//       </div>
//     );
//   }
// }
