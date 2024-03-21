import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import Typography from "@mui/material/Typography";

export const Validations = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [flag, setFlag] = useState();
  const [flag1, setFlag1] = useState();
  const [emptyemail, setEmptyemail] = useState();
  const [emptypassword, setEmptypassword] = useState();
  const [value1, setValue1] = useState("");
  const [login, setLogin] = useState([]);
  const [show, setShow] = useState(false);

  const handleclick = () => {
    if (password === true && value !== "") {
      setFlag(true);
    } else {
      setFlag(false);
    }

    if (email === true && value1 !== "") {
      setFlag1(true);
    } else {
      setFlag1(false);
    }

    if (value === "") {
      setEmptypassword(true);
    }

    if (value1 === "") {
      setEmptyemail(true);
    }

    if (email === false && password === false) {
      setShow(true);
      console.log("email=>", email, "password=>", password, "show=>", show);
	  fetch("http://localhost:3001/posts")
	.then((res) => res.json())
	.then((res) => {
	  setLogin(res[0].message);
	  console.log(res);
	})
	.catch((err) => {
	  console.log(err);
	});
  console.log("login =>", login);
    }

	
  };

  const handlechange = (e) => {
    const item = e.target.value;
    setValue(item);
    setFlag(false);
    setShow(false);
    setEmptypassword(false);
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]).{8,32}$/gm;
    const checkPassword = regex.test(item);
    setPassword(!checkPassword);
  };

  const handlechange1 = (e) => {
    const item = e.target.value;
    setFlag1(false);
    setEmptyemail(false);
    setValue1(item);
    setShow(false);
    const regex =
      /^[^.\-_*](|.-)(?!.*(?:"\.\.))[A-Za-z]{0,}[_.-]{0,1}[A-Za-z0-9]{0,}()[^-.]@[A-Za-z-]{3,}[.]{1}[A-Za-z]{2,}$/gm;
    const checkEmail = regex.test(item);
    setEmail(!checkEmail);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh",
            width: "50vw",
          }}
        >
          <Typography variant="h2" style={{ marginBottom: "60px" }}>
            Log In
          </Typography>

          <TextField
           
            label="Email"
            name="Email"
            inputProps={{ "data-testid": "email" }}
            placeholder="Email"
            type="email"
            style={{ marginBottom: "10px" }}
            value1={value}
            onChange={handlechange1}
          />
          {emptyemail ? <Alert severity="error">Empty Email</Alert> : ""}

          <TextField
            id="outlined-input"
            label="Password"
            name="password"
            placeholder="Password"
            inputProps={{ "data-testid": "password" }}
            type="password"
            value={value}
            onChange={handlechange}
            style={{ marginBottom: "10px", marginTop: "10px" }}
          />

          {emptypassword ? <Alert severity="error">Empty Password</Alert> : ""}

          {flag1 ? <Alert severity="error">Incorrect Email</Alert> : ""}

          {flag ? <Alert severity="error">Incorrect Password</Alert> : ""}

          {show ? <Alert severity="success">{login}</Alert> : ""}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: "10px", width: "100px" }}
              onClick={handleclick}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Validations;
