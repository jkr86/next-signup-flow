const Footer = ({ step }) => {
  return (
    <div className="mt-6">
      <p className="text-center text-xs px-12 leading-6">
        By creating a NEAR account, you agree to the NEAR {`${step === 1 ? "labs" : "Wallet"}`} <span className={`cursor-pointer ${step === 1 ? "text-blue-600" : "text-purple-600"}`}>
          {`${step === 1 ? "Terms & Conditions" : "Terms of Service"}`}
        </span> and
        <span className={`cursor-pointer ${step === 1 ? "text-blue-600" : "text-purple-600"}`}> Privacy Policy</span>.
      </p>
      <div className="w-full border-b border-gray-300 mt-7 mb-6" />
      <p className="text-gray-800 text-sm font-medium text-center mb-2.5">Already have NEAR Account?</p>
      <button className={`font-semibold py-2.5 px-5 rounded-lg flex items-center bg-black text-white m-auto`} type="submit">
        <span className="mr-3">Login with NEAR</span>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.686525 2.70578C0.296737 2.31599 0.298863 1.68189 0.686829 1.29393L0.774674 1.20608C1.16463 0.816125 1.79426 0.813511 2.18874 1.20799L7.27276 6.29202C7.66377 6.68303 7.66724 7.31351 7.27276 7.70799L2.18874 12.792C1.79773 13.183 1.16264 13.1819 0.774674 12.7939L0.686829 12.7061C0.296873 12.3161 0.293524 11.6872 0.686525 11.2942L4.98075 7L0.686525 2.70578Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}
export default Footer;