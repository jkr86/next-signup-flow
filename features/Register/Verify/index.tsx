import { useState } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";

const Verify = ({ changeStep, view }) => {
  const selectUser = (state) => state.user;
  const { email, phone } = useSelector(selectUser);
  const [OTP, setOTP] = useState("");
  const [isWrongOTP, setIsWrongOTP] = useState(false);
  const defaultOTP = "123456";
  const verify = () => {
    if (OTP === defaultOTP) {
      changeStep(3);
    } else {
      setIsWrongOTP(true);
    }
  };
  return (
    <div>
      <p className="mb-5 text-sm text-center w-3/4 m-auto leading-6 text-gray-800">
        {`We've sent a 6-digit verification code to the ${view === "email" ? "email address" : view}`} <br />
        <span className="text-blue-600 font-medium">{view === "email" ? email : phone}</span>
      </p>
      <p className="mb-2 text-gray-600 text-center">Enter verification code</p>
      <OtpInput
        value={OTP}
        onChange={(otp)=>setOTP(otp)}
        numInputs={6}
        isInputNum={true}
        containerStyle="justify-center"
        inputStyle={`otp border ${isWrongOTP ? "border-red-500" : "border-gray-300"} w-10 h-10 bg-gray-100 rounded-md text-gray-800`}
        focusStyle={"border-purple-600 outline-none"}
      />
      <div className="flex justify-center w-full mt-8">
        <button onClick={verify} disabled={OTP .length!==6} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${OTP .length===6 ? "bg-purple-500" : "bg-gray-300"} `} type="submit">
          <span className="mr-3">Continue</span>
          <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="w-full border-b border-gray-300 mt-7 mb-6" />
      <p className="text-gray-800 text-sm font-medium text-center">Didn`t receive your code?</p>
      <p onClick={() => changeStep(1)} className="text-blue-600 text-sm font-medium text-center my-6 cursor-pointer">{`Send to a different ${view === "email" ? "email address" : view}`}</p>
      <p className="text-blue-600 text-sm font-medium text-center cursor-pointer">
        Resend your code
      </p>
    </div>
  );
};
export default Verify;