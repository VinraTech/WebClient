import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="w-full min-h-screen grid place-items-center">
        <div>
          <h3 className="text-[30px] font-semibold text-[#bb882a] mb-8">
            Management Portal
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex flex-col items-baseline">
              <label required>
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                required
                type="text"
                {...register("email", {
                  required: true,
                  // pattern: {
                  //   value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  //   message: "Please provide valid Email,include @",
                  // },
                })}
                className="input"
              />
              <div>
                {errors.email && (
                  <span style={{ color: "red" }}>Required *</span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-baseline">
              <label>
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                autoComplete="false"
                className="input"
                required
                type="password"
                {...register("password", {
                  required: true,
                  min: {
                    value: 8,
                    message: "minmum length of password is 8",
                  },
                  pattern: {
                    value:
                      /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
                    message:
                      "Password Must have 1 special character 1 uppercase 1 LowerCase chareacter",
                  },
                })}
              />
              <div>
                {errors.password && (
                  <span style={{ color: "red" }}>
                    Invalid password.
                    <br />{" "}
                    <span style={{ color: "green" }}>
                      Please include
                      <br /> 1 special character,,
                      <br />1 uppercase alphabet
                      <br />1 special character
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                placeholder="Remeber me"
                {...register("Remeber me", {})}
              />
              <span>Remember me </span>
            </div>
            <input type="submit" />
            <Link to={"/forgetpassword"}>
              <h3 className="font-semibold text-blue-600">Forget password ?</h3>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
