import { useState } from "react";
import { useDispatch } from "react-redux";

const Phrase = ({ changeStep }) => {
  const dispatch = useDispatch();
  const phrases = ["gather", "engage", "father", "plant", "indigo", "dental", "sick", "fungus", "river", "morning", "love", "cow"];
  const [copiedPhrase, setCopiedPhrase] = useState("");
  const login = () => {
    dispatch({ type: "ADD_USER_PHRASE", payload: copiedPhrase });
    changeStep(6);
  };
  return (
    <>
      <p className="text-gray-600 text-sm mb-6">Keep your apps safe from other with access to your computer.</p>
      <p className="text-black font-semibold text-center mb-4">Phrase phrase</p>
      <div className="border border-gray-300 rounded-lg flex justify-center flex-wrap p-1 mx-2.5">
        {phrases.map((phrase, idx) => (
          <div key={idx} onClick={() => setCopiedPhrase(phrase)} className={`border ${copiedPhrase === phrase ? "border-purple-500" : "border-gray-300"} rounded-lg flex items-center pl-1 py-1 pr-3 m-1 cursor-pointer`}>
            <div className={`${copiedPhrase === phrase ? "bg-purple-600" : "bg-gray-700"} rounded-lg flex items-center justify-center p-1 w-6 h-6 text-white text-sm font-medium mr-2.5`}>{idx + 1}</div>
            <p className={`text-sm font-medium ${copiedPhrase === phrase ? "text-purple-500" : "text-gray-800"}`}>{phrase}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center cursor-pointer mt-6 mb-10">
        <svg className="mr-2" width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.98096 4V16C8.98096 16.5304 9.19167 17.0391 9.56674 17.4142C9.94182 17.7893 10.4505 18 10.981 18H18.981C19.5114 18 20.0201 17.7893 20.3952 17.4142C20.7702 17.0391 20.981 16.5304 20.981 16V7.242C20.9809 6.97556 20.9277 6.71181 20.8243 6.46624C20.7209 6.22068 20.5695 5.99824 20.379 5.812L17.064 2.57C16.6903 2.20466 16.1885 2.00007 15.666 2H10.981C10.4505 2 9.94182 2.21071 9.56674 2.58579C9.19167 2.96086 8.98096 3.46957 8.98096 4V4Z"
            stroke="#885FFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.981 18V20C16.981 20.5304 16.7702 21.0391 16.3952 21.4142C16.0201 21.7893 15.5114 22 14.981 22H6.98096C6.45052 22 5.94182 21.7893 5.56674 21.4142C5.19167 21.0391 4.98096 20.5304 4.98096 20V9C4.98096 8.46957 5.19167 7.96086 5.56674 7.58579C5.94182 7.21071 6.45052 7 6.98096 7H8.98096"
            stroke="#885FFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-purple-600 font-semibold">Copy Phrase</p>
      </div>
      <button onClick={login} className={`font-semibold py-2.5 px-5 rounded-lg text-white flex items-center ${copiedPhrase?"bg-purple-500":"bg-gray-300"}  m-auto`} type="submit">
        <span className="mr-3">Continue to Login</span>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
};

export default Phrase;