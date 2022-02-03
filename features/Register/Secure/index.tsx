import { useState } from "react";
import { useDispatch } from "react-redux";

const Secure = ({ changeStep }) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [arePasswordsUnmatched, setArePasswordsUnmatched] = useState(false);
  const secure = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setArePasswordsUnmatched(true);
      return;
    }
    dispatch({ type: "ADD_USER_PASSWORD", payload: password });
    changeStep(5);
  };
  return (
    <form onSubmit={(e) => secure(e)}>
      <p className="text-gray-600 text-sm mb-6">Keep your apps safe from other with access to your computer.</p>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setArePasswordsUnmatched(false);
            setPassword(e.target.value);
          }}
          placeholder={``}
          className={`mt-2.5 py-3 px-5 w-full rounded-lg border ${arePasswordsUnmatched ? "border-red-500" : "border-gray-300"} focus:border-purple-600 focus:outline-none`}
        />
      </div>
      <div className="mb-7">
        <label htmlFor="rePassword">Confirm Password</label>
        <input
          type="password"
          required
          value={rePassword}
          onChange={(e) => {
            setArePasswordsUnmatched(false);
            setRePassword(e.target.value);
          }}
          placeholder={``}
          className={`mt-2.5 py-3 px-5 w-full rounded-lg border ${arePasswordsUnmatched ? "border-red-500" : "border-gray-300"} focus:border-purple-600 focus:outline-none`}
        />
      </div>
      <button disabled={password.length < 4 || rePassword.length < 4 || password !== rePassword} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${password.length < 4 || rePassword.length < 4 || password !== rePassword ? "bg-gray-300" : "bg-purple-500"} m-auto`} type="submit">
        <span className="mr-3">Continue</span>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
};

export default Secure;