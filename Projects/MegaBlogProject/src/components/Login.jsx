import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import myAuthService from "../appWrite/myAuth";
import { login as authLogin } from "../reduxToolkit/authSlice";
import { useForm } from "react-hook-form";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // handleSubmit is method and in register we get all the data from handleSubmit.
  const { register, handleSubmit } = useForm();

  // we will pass this function to handleSubmit method as argument during submiting form.
  const myLogin = async (data) => {
    setError("");
    try {
      const session = await myAuthService.Login(data);
      if (session) {
        const userData = await myAuthService.currentUser();
        if (userData) {
          dispatch(authLogin(userData));
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
      {/* text container  */}
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to Your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          {/* form  */}
          <form onSubmit={handleSubmit(myLogin)} className='mt-8'>
            <div className="space-y-5">
                {/* Email */}
                <input 
                label= "Email"
                type="email"
                placeholder="Enter Your Email"
                {...register("email",{            // we will get only email from whole data.
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}  
                />

                {/* password  */}
                <input
                 type="password"
                 label = "password"
                 placeholder="Enter Your Password"
                 {...register("password", {
                    required: true,

                 })}
                />

                {/* button  */}
                <button className="w-full" type="submit">
                    Sign in
                </button>
            </div>
          </form>

      </div>
    </div>
  );
}

export default Login;
