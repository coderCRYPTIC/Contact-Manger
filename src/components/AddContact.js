import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  validateEmail = () => {
    const emailField = document.getElementById("email-field");
    const emailLabel = document.getElementById("email-label");
    const emailError = document.getElementById("email-error");
    emailLabel.style.bottom = "45px";
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid email";
        emailField.style.borderBottomColor="red";
        emailError.style.top="120%";
        return false;
      }
    emailError.innerHTML = "";
    emailField.style.borderBottomColor="green";
    emailError.style.top="100%";
    return true;
    }

    validateName = () => {
      const nameLabel = document.getElementById("name-label");
      nameLabel.style.bottom = "45px";
      }

    
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Content</h2>
        <h1></h1>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label id="name-label">Name</label>
            <input
              type="text"
              id="name-field"
              onKeyUp={this.validateName}
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <h1></h1>
          <div className="field">
            <label id ="email-label">Email</label>
            <input
              type="email"
              spellCheck="false"
              name="email"
              id="email-field"
              onKeyUp={this.validateEmail}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <span id="email-error"></span>
          </div>
          <h1></h1>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
