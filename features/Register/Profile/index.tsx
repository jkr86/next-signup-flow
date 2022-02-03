import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = ({ changeStep }) => {
  const selectUser = (state) => state.user;
  const { name, id, phone, email, password, phrase } = useSelector(selectUser);

  const goBack = () => {
    localStorage.setItem("step", `${1}`)
    changeStep(1)
  }
  return (
    <>
      <p className="text-black font-semibold mb-6 pr-6">Welcome to the wallet. Here are the details you provided</p>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Name: </p>
        <p className="text-sm w-28 mt-0 ml-4">{name}</p>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Client ID: </p>
        <p className="text-sm w-28 mt-0 ml-4">{id}</p>
      </div>
      {phone ? <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Phone: </p>
        <p className="text-sm w-28 mt-0 ml-4">{phone}</p>
      </div>
        : <div className="flex items-center mb-2">
          <p className="text-black font-semibold text-sm w-28">Email:</p>
          <p className="text-sm w-28 mt-0 ml-4">{email}</p>
        </div>}
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Password:</p>
        <p className="text-sm w-28 mt-0 ml-4">{password}</p>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-semibold text-sm w-28">Saved phrase:</p>
        <p className="text-sm w-28 mt-0 ml-4">{phrase}</p>
      </div>
      <button onClick={goBack} className={`mt-10 font-semibold py-2.5 px-5 rounded-lg flex items-center bg-gray-600 text-white`} type="button">
        <span className="mr-3">Start over</span>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  );
};

export default Profile;