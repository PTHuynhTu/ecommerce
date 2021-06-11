import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faUserPlus,
  faUserCircle,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { formReset, registration } from "../../redux/thunks/auth-thunks";
import PageLoader from "../../component/PageLoader/PageLoader";
import "./Registration.css";

const Registration = () => {
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  const loading = useSelector((state) => state.auth.loading);
  const errors = useSelector((state) => state.auth.errors);

  const { message } = errors;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formReset());
  }, []);

  useEffect(() => {
    setUsername("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setPassword("");
    setPassword2("");
  }, [isRegistered]);

  const onClickSignUp = (event) => {
    event.preventDefault();

    const userRegistrationData = {
      email,
      username,
      firstName,
      lastName,
      phoneNumber,
      password,
      password2,
    };
    dispatch(registration(userRegistrationData));
  };

  let pageLoading;
  if (loading) {
    pageLoading = <PageLoader />;
  }
  return (
    <div className="container mt-5">
      {pageLoading}
      <h4>
        <FontAwesomeIcon className="mr-2" icon={faUserPlus} /> SIGN UP
      </h4>
      <hr />
      {isRegistered ? (
        <div className="alert alert-success col-6" role="alert">
          Register successful!
        </div>
      ) : null}
      {message ? (
        <div className="alert alert-register-fail col-6" role="alert">
          {message}
        </div>
      ) : null}
      <form onSubmit={onClickSignUp}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Username: </label>
          <FontAwesomeIcon
            className="fa-w-14"
            style={{ position: "relative", top: "8px" }}
            icon={faUserCircle}
          />
          <div className="col-sm-4">
            <input
              type="text"
              name="username"
              value={username}
              className={"form-control"}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">E-mail: </label>
          <FontAwesomeIcon
            className="fa-w-14"
            style={{ position: "relative", top: "8px" }}
            icon={faEnvelope}
          />
          <div className="col-sm-4">
            <input
              type="email"
              name="email"
              value={email}
              required
              className={"form-control"}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">First name: </label>
          <FontAwesomeIcon
            style={{ position: "relative", top: "8px" }}
            icon={faUser}
          />
          <div className="col-sm-4">
            <input
              type="text"
              name="firstName"
              value={firstName}
              required
              className={"form-control"}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Last name: </label>
          <FontAwesomeIcon
            style={{ position: "relative", top: "8px" }}
            icon={faUser}
          />
          <div className="col-sm-4">
            <input
              type="text"
              name="lastName"
              value={lastName}
              required
              className={"form-control"}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password: </label>
          <FontAwesomeIcon
            style={{ position: "relative", top: "8px" }}
            icon={faLock}
          />
          <div className="col-sm-4">
            <input
              type="password"
              name="password"
              value={password}
              required
              className={"form-control"}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Confirm password: </label>
          <FontAwesomeIcon
            style={{ position: "relative", top: "8px" }}
            icon={faLock}
          />
          <div className="col-sm-4">
            <input
              type="password"
              name="password2"
              value={password2}
              required
              className={"form-control"}
              onChange={(event) => setPassword2(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Phone number: </label>
          <FontAwesomeIcon
            className="fa-w-14"
            style={{ position: "relative", top: "8px" }}
            icon={faPhoneAlt}
          />
          <div className="col-sm-4">
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              className={"form-control"}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <button type="submit" className="btn btn-dark mx-3">
            <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
            Sign up
          </button>
        </div>
        {/* <ReCAPTCHA
          onChange={onChangeRecaptcha}
          sitekey="6Lc5cLkZAAAAAN8mFk85HQieB9toPcWFoW0RXCNR"
        /> */}
      </form>
    </div>
  );
};
export default Registration;
