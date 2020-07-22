import React from 'react';
import './AdminRegisterAdmin.scss';
import axios from "axios";
import { SERVER_URL } from "../../variables";


export default class AdminRegisterAdmin extends React.Component {
    state = {
    name: "",
    username: "",
    email: "",
    password: "",
    confPassword: "",
    phone: "",
    img: "", //Image path
    selectedImg: null, // Image file
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleChangeusername = (event) => {
    this.setState({ username: event.target.value });
  };
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleChangeConfPassword = (event) => {
    this.setState({ confPassword: event.target.value });
  };

  handleChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  onChangeImg = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      selectedImg: event.target.files[0],
    });
  };

  handleSubmit = async (e) => {
    if (this.state.selectedImg === null) {
      alert("Select an image");
      e.persist();
      // e.preventDefault();
      return false;
    }

    //Images upload
    let data = new FormData();
    data.append("file", this.state.selectedImg);
    let res1 = await axios.post(`${SERVER_URL}/products/uploadimg`, data);
    if (res1.status !== 201) {
      alert("Error uploading the image");
      e.persist();
      // e.preventDefault();
      return false;
    }

    let res = await axios({
      method: "POST",
      url: `${SERVER_URL}/customers`,
      data: {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password, //Not worrying about security
        img: `/img/${this.state.selectedImg.name}`,
        phone: this.state.phone,
        admin: true, //This registration are not for admins
      },
    });

    if (res.status !== 201) {
      alert("Problem when submitting");
    } else {
      alert("Administrator registered!");
    }
  };

  cancelSubmission = () => {
    this.props.history.push("/");
  };

  
  
  
  render() {
  return (
    <div class="admin-register-admin">
      <div class="content-wrapper">
      {/* <!-- ADM Registration page--> */}

        <div class="adm_registration">
          {/* <!-- New admin form --> */}
          <div class="form-popup" id="admin">
              <form action="#" class="form-container">
                  <h1>New administrator</h1>

                  <label for="name">Name</label>
                  <input type="text" placeholder="Enter Name" name="name" onChange = {this.handleChangeName} required/>

                  <label for="email">Username</label>
                  <input type="text" placeholder="Enter username" name="name" onChange = {this.handleChangeusername} />

                  <label for="phone">Phone</label>
                  <input type="number" placeholder="(DDD) 00000-0000" name="name" onChange = {this.handleChangePhone}  required/>

                  <label for="customer_pic">Picture:</label>
                  <input type="file" id="customer_pic" name="picture" onChange = {this.onChangeImg} />

                  <label for="email">Email</label>
                  <input type="text" placeholder="Enter Email" name="email" onChange = {this.handleChangeEmail}  required/>

                  <label for="psw">Password</label>
                  <input type="password" placeholder="Enter Password" name="psw"  onChange = {this.handleChangePassword} required/>
                  
                  <label for="cPsw">Confirm Password</label>
                  <input type="Password" placeholder="Enter the Password Again" name="cPsw"  onChange = {this.handleChangeConfPassword} required/>

                  <button type="button" class="btn" onClick = {this.handleSubmit}>Create</button>
                  <button type="button" class="btn cancel" onclick="closeForm(2)">Cancel</button>
              </form>
          </div>

        </div>

      </div>
    </div>
    
  );
  }
}