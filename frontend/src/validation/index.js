import * as Yup from "yup";

export const signUp = Yup.object({
  fName: Yup.string().min(3).max(15).required("Please Enter Your Firstname"),
  lName: Yup.string().min(3).max(15).required("Please Enter Your Lastname"),
  email: Yup.string().email().required("Please Enter Valid Email Address"),
  password: Yup.string().min(8).required("Please Enter Password"),
  gender: Yup.string().required("Select Your Gender"),
});

export const signIn = Yup.object({
  email: Yup.string().email().required("Please Enter Email Address"),
  password: Yup.string().min(8).required("Please Enter Password"),
});
