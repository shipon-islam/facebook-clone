import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/png/login2.png";
import FormButton from "../components/FormButton";
import FormHead from "../components/FormHead";
import InputBox from "../components/InputBox";
import { icons } from "../svg-icons/icons";

export default function Login() {
  const [formValue, setformValue] = useState({ email: "", password: "" });
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    let values = e.target.value;
    let names = e.target.name;

    setformValue({ ...formValue, [names]: values });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("api/user/login", formValue);
      const users = await axios.get("api/user/get");

      if (users) {
        window.localStorage.setItem("user", JSON.stringify(users.data));
        setformValue({ email: "", password: "" });

        navigate("/");

        window.location.reload();
      }
    } catch (error) {
      setError("invalid creadiential");
    }
  };

  return (
    <div className="container-width">
      <FormHead
        head="welcome"
        title="create your account.its free and only takes a minute"
      />
      <div className=" flex sm:shadow-sm sm:shadow-blue-500 rounded-md px-6 py-8  mt-10">
        <div className=" relative hidden sm:block w-full h-[400px]">
          <img
            className="absolute w-fit bottom-0"
            src={loginImage}
            alt="signup"
          />
        </div>
        <form
          className="w-fit sm:block mx-auto sm:mt-28 md:mt-20"
          onSubmit={handleSubmit}
        >
          <InputBox
            Type="email"
            Name="email"
            Value={formValue.email}
            onHandleChange={handleChange}
            Placeholder="email"
            Icons={icons.emailIcon}
          />

          <div className="form-control">
            <input
              className="input-box"
              type={passwordToggle ? "password" : "text"}
              name="password"
              onChange={handleChange}
              value={formValue.password}
              placeholder="password"
            />
            <small
              className="form-icons"
              onClick={() => setPasswordToggle(!passwordToggle)}
            >
              {passwordToggle ? icons.openEye : icons.closeEye}
            </small>
            <span className="text-red-500 block  text-[0.8rem] font-semibold font-lato capitalize">
              {error && error}
            </span>
          </div>

          <FormButton
            ButtonName="login"
            navigate="signup"
            NavigateTitle=" don't have an account?"
          />
        </form>
      </div>
    </div>
  );
}
