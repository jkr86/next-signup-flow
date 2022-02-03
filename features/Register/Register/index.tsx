import { useState } from "react";
import { useDispatch } from "react-redux";

const Register = ({ changeStep }) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [accountID, setAccountID] = useState("");

  const register = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER_NAME", payload: fullName });
    dispatch({ type: "ADD_USER_ID", payload: `${accountID}.near` });
    changeStep(4);
  };
  return (
    <form onSubmit={(e) => register(e)}>
      <p className="text-gray-600 text-sm mb-6">Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
      <div className="mb-4">
        <label htmlFor="name">Full Name</label>
        <input required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={`Ex. John Doe`} className="mt-2.5 py-3 px-5 w-full rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
      </div>
      <div className="mb-7">
        <label htmlFor="name">Account ID</label>
        <div className="flex items-stretch mt-2.5 w-full relative">
          <input required value={accountID} onChange={(e) => setAccountID(e.target.value)} placeholder={`yourname`} className="py-3 px-5 w-full rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
          <div className="p-3 border-gray-300 border-l rounded-l-none absolute rounded-lg right-0 m-px">.near</div>
        </div>
      </div>
      <button disabled={fullName.length < 4 || accountID.length < 4} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${fullName.length < 4 || accountID.length < 4 ? "bg-gray-300" : "bg-purple-500"} m-auto`} type="submit">
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

export default Register;