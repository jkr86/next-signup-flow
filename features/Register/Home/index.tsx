import { useState } from "react";
import { useDispatch } from "react-redux";
import ReactPhoneInput from "react-phone-input-2";

const Home = ({ changeStep, view, setView }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/\S+@\S+\.\S+/);
  };

  const Register = () => {
    if (view === "email") {
      if (validateEmail(inputValue) === null) return null;
      dispatch({ type: "ADD_USER_EMAIL", payload: inputValue });
      changeStep(2);
    } else {
      if (inputValue.length < 4) return;
      dispatch({ type: "ADD_USER_PHONE", payload: inputValue });
      changeStep(2);
    }
  };

  const handlePhoneChange = value => {
    setInputValue(value)
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          className={`${view === "email" ? "font-medium border" : undefined} border-gray-300 rounded-lg py-1.5 px-3 mr-4`}
          onClick={() => {
            setInputValue("");
            setView("email");
          }}>
          Email
        </button>
        <button
          className={`${view === "phone" ? "font-medium border" : undefined} border-gray-300 rounded-lg py-1.5 px-3`}
          onClick={() => {
            setInputValue("");
            setView("phone");
          }}>
          Phone
        </button>
      </div>
      <form
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          Register();
        }}>
        <div className="relative mb-5">
          {view === "email" ? <input type={"email"} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={`Enter your email`} className="py-3 px-5 w-full h-full rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
            : <ReactPhoneInput
              country={"us"}
              value={inputValue}
              onChange={handlePhoneChange}
              placeholder="Enter your phone"
              inputClass="py-3 px-5 w-full h-full rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"
            />}
        </div>
        <div className="flex justify-center w-full">
          <button disabled={(view === "email" && !validateEmail(inputValue)) || (view === "phone" && inputValue.length < 4)} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${(view === "email" && validateEmail(inputValue)) || (view === "phone" && inputValue.length > 4) ? "bg-purple-500" : "bg-gray-300"} `} type="submit">
            <span className="mr-3">Continue</span>
            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;

