import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faLock,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  formReset,
  login,
  activateAccount,
} from "../../redux/thunks/auth-thunks";
import "../../assets/css/Ecommerce.css";
const Login = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((state) => state.auth.errors);
  const success = useSelector((state) => state.auth.success);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { message } = errors;

  useEffect(() => {
    dispatch(formReset());
    if (match.params.code) {
      dispatch(activateAccount(match.params.code));
    }
  }, []);

  const onClickSignIn = (event) => {
    event.preventDefault();
    const userData = { username, password };
    dispatch(login(userData, history));
  };
  return (
    <div id="container" className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h4>
            <FontAwesomeIcon className="mr-3" icon={faSignInAlt} />
            SIGN IN
          </h4>
          <hr />
          {message ? (
            <div className="alert alert-danger col-6" role="alert">
              {message}
            </div>
          ) : null}
          {success ? (
            <div className="alert alert-success col-6" role="alert">
              {success}
            </div>
          ) : null}
          <form onSubmit={onClickSignIn}>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Username: </label>
              <FontAwesomeIcon
                className="fa-w-14"
                style={{ position: "relative", top: "8px" }}
                icon={faUserCircle}
              />
              <div className="col-sm-7">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Password: </label>
              <FontAwesomeIcon
                style={{ position: "relative", top: "8px" }}
                icon={faLock}
              />
              <div className="col-sm-7">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <button type="submit" className="btn btn-dark mx-3">
                <FontAwesomeIcon className="mr-3" icon={faSignInAlt} />
                Sign in
              </button>
              {/* <Link to={"/forgot"} style={{ position: "relative", top: "8px" }}>
                Forgot password?
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
