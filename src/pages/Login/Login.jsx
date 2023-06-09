import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Link,
  useActionData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import Swal from "sweetalert2";

// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   LoadCanvasTemplateNoReload,
//   validateCaptcha,
// } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";

import { Helmet } from "react-helmet";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    user,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signInWithFaceBook,
  } = useContext(AuthContext);

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "Logging SuccessFully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };



  const handlevalidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      alert("Captcha Matched");
    } else {
      setDisabled(true);
      alert("Captcha Does Not Match");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handlevalidateCaptcha}
                  type="text"
                  placeholder="Type the Captcha"
                  name="captcha"
                  className="input input-bordered"
                />
              </div> */}
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <button
                  disabled={!disabled}
                  className="bg-[#D1A054] btn capitalize"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="m-4">
              <h2 className="text-lg font-semibold">
                New To Here Please:{" "}
                <span className="text-md font-bold underline">
                  <Link to="/register">Register</Link>{" "}
                </span>
              </h2>
            </div>
              <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
