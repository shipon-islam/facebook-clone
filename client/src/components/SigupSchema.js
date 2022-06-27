import * as yup from "yup";
export const schema = yup.object({
  username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("email is invalid")

    .required("Email is required"),
  phone: yup.string().required("phone number is required"),

  password: yup
    .string()
    .min(6, "password must be at least 6 characters")
    .required("password is required"),

  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password not match")
    .required("confirm password is required"),
});
