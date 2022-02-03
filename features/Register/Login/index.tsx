import { useState } from "react";
import { useSelector } from "react-redux";

const Login = ({ changeStep }) => {
  const selectUser = (state) => state.user;
  const user = useSelector(selectUser);
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  
  const unlock = () => {
    if (user.password !== password) {
      setIsWrongPassword(true);
      return;
    }
    changeStep(7);
  };
  return (
    <>
      <div className="mt-7">
        <p className="text-lg mb-2.5 text-center font-semibold">Welcome back!</p>
        <p className="text-sm text-center">Please enter the password to unlock this wallet</p>
        <div className="my-4">
          <label htmlFor="lPassword">Password</label>
          <input
            id="lPassword"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={``}
            className={`mt-2.5 py-3 px-5 w-full rounded-lg border ${isWrongPassword ? "border-red-500" : "border-gray-300"} focus:border-purple-600 focus:outline-none`}
          />
        </div>
        <button onClick={unlock} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${password.length > 4 ? "bg-purple-500" : "bg-gray-300"}  m-auto`} type="submit">
          <span className="mr-3">Unlock</span>
          <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Login;
