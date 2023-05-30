import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { Helmet } from "react-helmet";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const {
    user,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signInWithFaceBook,
  } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
        setSucess("login Sucessfull");
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
    if (signIn) {
      alert("User Logging Sucessfully");
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  const handleFaceBookSignIn = () => {
    signInWithFaceBook()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handlevalidateCaptcha = (e) => {
    const user_captcha_value = captchaRef.current.value;
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type the Captcha"
                  name="captcha"
                  ref={captchaRef}
                  className="input input-bordered"
                />
                <button
                  onClick={handlevalidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate Captcha
                </button>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <button
                  disabled={disabled}
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

            <div className="flex flex-col  gap-2 mb-4  ">
              <div className="px-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex  btn  btn-outline btn-block"
                >
                  <BsGoogle className="mr-2"></BsGoogle>{" "}
                  <span className="text-xl hover:text-red-500">Google</span>
                </button>
              </div>
              <div className="px-4 ">
                <button
                  onClick={handleGithubSignIn}
                  className="flex  btn btn-outline btn-block"
                >
                  <BsGithub className="mr-2"></BsGithub>{" "}
                  <span className="text-xl hover:text-red-500">Github</span>
                </button>
              </div>
              <div className="px-4">
                <button
                  onClick={handleFaceBookSignIn}
                  className="flex  btn btn-outline btn-block"
                >
                  <BsFacebook className="mr-2"></BsFacebook>{" "}
                  <span className="text-xl hover:text-red-500">FaceBook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;