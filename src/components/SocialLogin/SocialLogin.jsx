import React, { useContext } from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signInWithGoogle, signInWithGithub, signInWithFaceBook } =
    useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  const handleFaceBookSignIn = () => {
    signInWithFaceBook()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex justify-center gap-2  mb-4  ">
        <div className="">
          <button
            onClick={handleGoogleSignIn}
            className="btn  btn-outline btn-circle "
          >
            <FcGoogle></FcGoogle>
          </button>
        </div>
        <div className="">
          <button
            onClick={handleGithubSignIn}
            className="btn btn-outline  btn-circle "
          >
            <BsGithub></BsGithub>{" "}
          </button>
        </div>
        <div>
          <button
            onClick={handleFaceBookSignIn}
            className=" btn btn-outline  btn-circle"
          >
            <BsFacebook></BsFacebook>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
