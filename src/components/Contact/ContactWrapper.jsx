import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContactWrapper = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handle = () => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
  };

  useEffect(() => {
    // const json = JSON.stringify(firstName, lastName, email, phone);
    localStorage.setItem(
      "dataKey",
      JSON.stringify(firstName, lastName, email, phone)
    );
  }, [firstName, lastName, email, phone]);

  return (
    <>
      <ContactStyle>
        <div className="mainDiv">
          <form className="form_div" onSubmit={handle}>
            <div className="input_div">
              <label className="label text-left">First Name :</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="first name"
                required
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input_div">
              <label className="label">Last Name :</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="last name"
                required
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input_div">
              <label className="label">Email :</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_div">
              <label className="label">Phone Number :</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phone Number"
                required
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit" className="button" value="submit">
              Submit
            </button>
          </form>
        </div>
      </ContactStyle>
    </>
  );
};

export default ContactWrapper;

const ContactStyle = styled.div`
  .form_div {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* flex-direction: column; */
    align-items: center;
    background-color: transparent;
    display: block;
    margin: auto;
    width: 650px;
    height: 380px;
    padding-top: 24px;
    box-shadow: 10px 10px 10px grey;
  }
  .input_div {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .input {
    width: 50%;
    height: 40px;
    border-radius: 4px;
    font-size: 15px;
  }
  .button {
    width: 100px;
    height: 40px;
    background-color: #101522;
    border-radius: 4px;
    color: #ffff;
    border: none;
    display: block;
    font-size: 15px;
    margin: auto;
    margin-top: 30px;
  }
  .label {
    text-align: left !important;
    width: 150px;
    /* display: flex;
    justify-content: flex-start; */
  }
  .mainDiv {
    padding-top: 70px;
    height: 87.4vh;
    width: 100%;
    background-color: white;
  }
`;
