import React, { useState } from "react";
import { useFormik } from "formik";
import avatar from "../avater.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../validation/index";
import { BiErrorCircle } from "react-icons/bi";
import { LoginUser } from "../features/users/loginUser";
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet-async";
import axios from "axios";

let initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async () => {
    setLoading(true);
    try {
      let { data } = await axios.post("/api/login", {
        email: formik.values.email,
        password: formik.values.password,
      });
      setLoading(false);
      setFailed("");
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(LoginUser(data));
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signIn,
    onSubmit: () => {
      loginUser();
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-main_bg relative">
      <div className="flex items-center justify-between flex-col lg:flex-row">
        <img src="../../../images/login.webp" alt="" />
        <form
          className="w-[300px] lg:ml-[100px] mt-5 lg:mt-0"
          onSubmit={formik.handleSubmit}
        >
          <Helmet>
            <title>Login</title>
          </Helmet>
          <div className="avatar w-20 h-20 m-auto mb-5 overflow-hidden border-2 border-green border-solid rounded-full">
            <picture>
              <img
                className="m-auto mb-4 mt-[12px]"
                src={avatar}
                alt="avatar"
              />
            </picture>
          </div>
          <input
            className="w-full py-3 px-5 rounded-full bg-page_color font-primary text-sm focus:outline-0 text-text_color mb-5"
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
            className="w-full py-3 px-5 rounded-full bg-page_color font-primary text-sm focus:outline-0 text-text_color mb-5"
            type="password"
            placeholder="Password"
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

          <div className="text-center">
            <button
              className="bg-green hover:bg-[#333333] px-8 py-3 w-[50%] mt-2 rounded-full font-primary font-normal text-base transition ease-linear duration-150  text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader
                  className="m-auto mt-2"
                  color="#fff"
                  loading={loading}
                  size={15}
                />
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          {error && (
            <p className="text-red mb-2 font-primary text-lg font-normal text-center mt-3">
              <BiErrorCircle style={{ display: "inline-block" }} /> {error}
            </p>
          )}
          {failed && (
            <p className="text-red mb-2 font-primary text-xl font-normal text-center mt-3">
              <BiErrorCircle style={{ display: "inline-block" }} /> {failed}
            </p>
          )}
          <div className="text-center mt-3">
            <Link
              className="text-secondary_color hover:underline font-primary text-base font-normal"
              to="/reset"
            >
              Forgotten password ?
            </Link>
          </div>
          <p className="singin text-secondary_color font-primary text-lg mt-7 text-center">
            Don't have an account?{" "}
            <NavLink className="text-text_color hover:underline" to="/register">
              Create Now
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
