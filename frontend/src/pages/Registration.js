import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { signUp } from "../validation/index";
import { useDispatch } from "react-redux";
import { createUser } from "../features/users/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Registration = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let initialValues = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    bYear: new Date().getFullYear(),
    gender: "",
  };

  const registration = async () => {
    try {
      setLoading(true);
      let { data } = await axios.post("/api/signup", {
        fName: formik.values.fName,
        lName: formik.values.lName,
        email: formik.values.email,
        password: formik.values.password,
        bMonth: formik.values.bMonth,
        bDay: formik.values.bDay,
        bYear: formik.values.bYear,
        gender: formik.values.gender,
      });
      setLoading(false);
      setSuccess(data.message);
      setFailed("");
      const { message, ...rest } = data;
      setTimeout(() => {
        dispatch(createUser(rest));
        localStorage.setItem("user", JSON.stringify(rest));
        navigate("/login");
      }, 3000);
    } catch (err) {
      setLoading(false);
      setSuccess("");
      setFailed(err.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUp,
    onSubmit: async () => {
      const checkDate = new Date();
      const picked_date = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      );
      const atleast_14 = new Date(1970 + 14, 0, 1);
      const max_70 = new Date(1970 + 70, 0, 1);
      if (checkDate - picked_date < atleast_14) {
        return setError("underage you are not 14");
      } else if (checkDate - picked_date > max_70) {
        return setError("Your age is more than 70 you are not eligable");
      }
      registration();
    },
  });

  const tempYrs = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => tempYrs - index);
  const Month = Array.from(new Array(12), (val, index) => 1 + index);
  const days = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };
  const getDates = Array.from(new Array(days()), (val, index) => 1 + index);

  return (
    <div className="min-h-screen flex items-center justify-center bg-main_bg">
      <div className="2xl:w-3/6 lg:w-9/12 w-full px-5">
        <h2 className="font-primary md:text-4xl font-bold text-black mb-5 text-3xl">
          Registration <span className="text-white">Form</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="max-w-[100%]">
            <Helmet>
              <title>Registration</title>
            </Helmet>
            <form onSubmit={formik.handleSubmit}>
              <input
                className="w-full py-3 px-5 rounded-full bg-[#E6E6E6] font-primary text-sm focus:outline-0 text-black mb-5"
                type="text"
                placeholder="First Name"
                autoComplete="off"
                name="fName"
                value={formik.values.fName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {formik.errors.fName && formik.touched.fName ? (
                <p className="text-red mb-2 font-primary text-base font-normal">
                  {formik.errors.fName}
                </p>
              ) : null}

              <input
                className="w-full py-3 px-5 rounded-full bg-[#E6E6E6] font-primary text-sm focus:outline-0 text-black mb-5"
                type="text"
                placeholder="Last Name"
                autoComplete="off"
                name="lName"
                value={formik.values.lName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {formik.errors.lName && formik.touched.lName ? (
                <p className="text-red mb-2 font-primary text-base font-normal">
                  {formik.errors.lName}
                </p>
              ) : null}

              <input
                className="w-full py-3 px-5 rounded-full bg-[#E6E6E6] font-primary text-sm focus:outline-0 text-black mb-5"
                type="email"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {formik.errors.email && formik.touched.email ? (
                <p className="text-red mb-2 font-primary text-base font-normal">
                  {formik.errors.email}
                </p>
              ) : null}

              <input
                className="w-full py-3 px-5 rounded-full bg-[#E6E6E6] font-primary text-sm focus:outline-0 text-black mb-5"
                type="password"
                placeholder="New Password"
                autoComplete="off"
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />

              {formik.errors.password && formik.touched.password ? (
                <p className="text-red mb-2 font-primary text-base font-normal">
                  {formik.errors.password}
                </p>
              ) : null}

              <label className="text-secondary_color font-primary mb-2 inline-block font-medium focus:outline-none">
                Date Of Birth
              </label>
              <div className="flex justify-between mb-5">
                <div className="w-[30%]">
                  <select
                    className="birth_box w-full p-2 border border-secondary_bg bg-transparent font-primary text-secondary_color rounded-md focus:outline-none"
                    name="bDay"
                    value={formik.values.bDay}
                    onChange={formik.handleChange}
                  >
                    {getDates.map((item, index) => (
                      <option value={item} key={index}>
                        {item <= 9 && "0"}
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-[30%]">
                  <select
                    className="birth_box w-full p-2 border border-secondary_bg bg-transparent font-primary text-secondary_color rounded-md focus:outline-none"
                    name="bMonth"
                    value={formik.values.bMonth}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  >
                    {Month.map((item, index) => (
                      <option value={item} key={index}>
                        {item <= 9 && "0"}
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-[30%]">
                  <select
                    className="birth_box w-full p-2 border border-secondary_bg bg-transparent font-primary text-secondary_color rounded-md focus:outline-none"
                    onChange={formik.handleChange}
                    name="bYear"
                    value={formik.values.bYear}
                  >
                    {years.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {error ? (
                <p className="text-red mb-2 font-primary text-base font-normal">
                  {error}
                </p>
              ) : null}
              <label className="text-secondary_color font-primary mb-2 inline-block font-medium focus:outline-none">
                Select Gender
              </label>
              <div className="flex justify-between">
                <div className="md:w-[30%] gender_box flex justify-between items-center border rounded-md border-box px-5 py-2 border-secondary_bg">
                  <label
                    htmlFor="male"
                    className="mr-2 text-secondary_color text-base font-medium font-primary"
                  >
                    Male
                  </label>

                  <input
                    id="male"
                    autoComplete="off"
                    name="gender"
                    value="male"
                    className="bg-secondary_bg"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="max-w-[30%] gender_box flex justify-between items-center border rounded-md border-box px-5 py-2 border-secondary_bg">
                  <label
                    htmlFor="female"
                    className="mr-2 text-secondary_color text-base font-medium font-primary"
                  >
                    Female
                  </label>
                  <input
                    id="female"
                    autoComplete="off"
                    name="gender"
                    value="female"
                    className="bg-secondary_bg"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="max-w-[30%] gender_box flex justify-between items-center border rounded-md border-box px-5 py-2 border-secondary_bg">
                  <label
                    htmlFor="other"
                    className="mr-2 text-secondary_color text-base font-medium font-primary"
                  >
                    Others
                  </label>
                  <input
                    id="other"
                    autoComplete="off"
                    name="gender"
                    value="other"
                    className="bg-secondary_bg"
                    type="radio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {formik.errors.gender && formik.touched.gender ? (
                <p className="text-red mb-2 font-primary text-base font-normal mt-4">
                  {formik.errors.gender}
                </p>
              ) : null}

              <button
                className="bg-green hover:bg-[#333333] px-8 py-3 w-[50%] mt-5 rounded-full font-primary font-normal text-base transition ease-linear duration-150  text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <ClipLoader color="#fff" loading={loading} size={15} />
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
          </div>
          <div className="max-w-[420px] hidden md:block">
            <img className="w-full" src="../../../images/signup.jpg" alt="" />
          </div>
        </div>
        {failed && (
          <p className="text-red mb-2 font-primary text-xl font-normal">
            <BiErrorCircle style={{ display: "inline-block" }} /> {failed}
          </p>
        )}
        {success && (
          <p className="text-green mb-2 font-primary text-lg font-normal">
            <AiOutlineCheckCircle style={{ display: "inline-block" }} />{" "}
            {success}
          </p>
        )}
        <p className="text-title_color font-primary text-lg mt-3">
          Already have an account?{" "}
          <NavLink className="text-black hover:underline" to="/login">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Registration;
