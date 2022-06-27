import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import singupImage from "../assets/png/signup.png";
import FormButton from "../components/FormButton";
import FormHead from "../components/FormHead";
import { schema } from "../components/SigupSchema";
import { icons } from "../svg-icons/icons";

export default function Signup() {
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [cpasswordToggle, setCpasswordToggle] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setError("");
      const res = await axios.post("api/user/signup", data);
      if (res) {
        navigate("/login");
      }
    } catch (error) {
      setError("email already exists");
    }
  };

  return (
    <div className="container-width">
      <FormHead
        head="Signup form"
        title="create your account.its free and only takes a minute"
      />
      <div className=" flex sm:shadow-sm sm:shadow-blue-500 rounded-md px-6 py-8  mt-10">
        <div className=" relative hidden sm:block w-full h-[400px]">
          <img className="absolute bottom-0" src={singupImage} alt="signup" />
        </div>
        <form
          className="w-fit sm:block mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <input
              className="input-box"
              type="text"
              name="username"
              placeholder="username"
              {...register("username")}
            />
            <small className="form-icons">{icons.userIcon}</small>
            <span className="text-red-500 block text-[ text-[0.8rem] font-semibold font-lato capitalize">
              {errors.username && errors.username.message}
            </span>
          </div>
          <div className="form-control">
            <input
              className="input-box"
              type="email"
              name="email"
              placeholder="email"
              {...register("email")}
            />
            <small className="form-icons">{icons.emailIcon}</small>
            <span className="text-red-500 block  text-[0.8rem] font-semibold font-lato capitalize">
              {errors.email && errors.email.message}
            </span>
          </div>
          <div className="form-control">
            <input
              className="input-box"
              type="text"
              name="phone"
              placeholder="phone"
              {...register("phone")}
            />
            <small className="form-icons">{icons.phoneIcon}</small>
            <span className="text-red-500 block  text-[0.8rem] font-semibold font-lato capitalize">
              {errors.phone && errors.phone.message}
            </span>
          </div>

          <div className="form-control">
            <input
              className="input-box"
              type={passwordToggle ? "password" : "text"}
              name="password"
              placeholder="password"
              {...register("password")}
            />
            <small
              className="form-icons"
              onClick={() => setPasswordToggle(!passwordToggle)}
            >
              {passwordToggle ? icons.openEye : icons.closeEye}
            </small>
            <span className="text-red-500 block  text-[0.8rem] font-semibold font-lato capitalize">
              {errors.password && errors.password.message}
            </span>
          </div>
          <div className="form-control">
            <input
              className="input-box"
              type={cpasswordToggle ? "password" : "text"}
              name="cpassword"
              placeholder="confirm password"
              {...register("cpassword")}
            />
            <small
              className="form-icons"
              onClick={() => setCpasswordToggle(!cpasswordToggle)}
            >
              {cpasswordToggle ? icons.openEye : icons.closeEye}
            </small>
            <span className="text-red-500 block  text-[0.8rem] font-semibold font-lato capitalize">
              {errors.cpassword && errors.cpassword.message}
            </span>{" "}
          </div>
          <div>
            <span className="text-red-500 block  text-[0.8rem] font-semibold font-lato capitalize">
              {error && error}
            </span>
          </div>

          <FormButton
            ButtonName="signup"
            navigate="login"
            NavigateTitle=" already have an account?"
          />
        </form>
      </div>
    </div>
  );
}

// <form onSubmit={handleSubmit(onSubmit)}>
//   <input type="text" placeholder="First name"  />
//   <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
//   <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//   <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
//   <select {...register("Title", { required: true })}>
//     <option value="Mr">Mr</option>
//     <option value="Mrs">Mrs</option>
//     <option value="Miss">Miss</option>
//     <option value="Dr">Dr</option>
//   </select>

//   <input {...register("Developer", { required: true })} type="radio" value="Yes" />
//   <input {...register("Developer", { required: true })} type="radio" value="No" />
