import React, { useState } from "react";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // console.log({
    //   email: email,
    //   password: password,
    // });
    if (email === "" || password === "" || name === "" || phone === "") {
      alert("All input fields are required!");
      return;
    }

    try {
      //   throw new Error("Simulated error for testing the catch block");
      console.log({
        email: email,
        name: name,
        phone: phone,
        password: password,
      });
    } catch (error) {
      console.log(`Internal Server Error ${error}`);
    }
  };

  return (
    <div className="main">
      {/* logo */}
      <div className="logo">
        <img src="/logo192.png" alt="logo" />
      </div>
      {/* page heading */}
      <div className="title">
        <p className="title-text">Signup</p>
      </div>
      {/* form */}
      <div className="login-form">
        {/* an input */}
        <TextInput
          label={"Name"}
          placeholder={"Enter full name"}
          type="text"
          value={name}
          setValue={setName}
        />
        <TextInput
          label={"Email"}
          placeholder={"Enter email address"}
          type="email"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label={"Phone"}
          placeholder={"Enter phone number"}
          type="text"
          value={phone}
          setValue={setPhone}
        />
        <TextInput
          label={"Password"}
          placeholder={"Enter password"}
          type="password"
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className="button">
        <Button buttonTitle={"Login"} onPress={() => handleSignup()} />
      </div>
    </div>
  );
};

export default Signup;
