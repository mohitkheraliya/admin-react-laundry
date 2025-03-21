import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSendOtp } from "../hooks";
import * as Yup from "yup";
import LoadingSpinner from "../components/shimmer/LoadingSpinner";

const validationSchema = Yup.object({
  mobileNumber: Yup.string()
    .required("Please enter mobile number")
    .matches(/^[0-9]{10}$/, "Mobile Number must be a 10-digit number")
    .test("format", "Mobile Number must be a 10-digit number", (value) => {
      if (!value) return true;
      return /^[0-9]{10}$/.test(value);
    }),
});

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState<number | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { sendOtp, loading } = useSendOtp();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ mobileNumber }, { abortEarly: false });
      setErrorMessage("");

      const success = await sendOtp(mobileNumber);
      if (success) {
        navigate("/forgot-password/enterotp", { state: { mobileNumber } });
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrorMessage(error.errors[0]);
      }
    }
  };

  return (
    <div className="flex justify-center items-center p-5 order-2 lg:order-1 w-full">
      <div className="card max-w-[370px] w-full">
        <form
          className="card-body flex flex-col gap-y-1 p-10"
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Forgot Password ?
            </h3>
            <span className="text-2sm font-medium text-gray-600">
              Enter your mobile number
            </span>
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label className="form-label text-gray-900">Mobile Number</label>
            <label className="input" data-toggle-password="true">
              <input
                name="mobile_number"
                placeholder=""
                value={mobileNumber || ""}
                onChange={(e) => setMobileNumber(Number(e.target.value))}
              />
            </label>
            <p className="right-[0.2rem] text-red-500 text-sm w-80">
              {errorMessage || "\u00A0"}
            </p>
          </div>
          <button
            className="btn btn-primary flex justify-center grow"
            disabled={loading}
          >
            {loading ? <LoadingSpinner /> : <>Send Otp</>}
          </button>

          <div className="text-center mt-4">
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ForgotPassword };
