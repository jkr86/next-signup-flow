import { useEffect, useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Verify from "./Verify"
import Register from "./Register";
import Secure from "./Secure";
import Phrase from "./Phrase";
import Login from "./Login";
import Profile from "./Profile";

export default function RegisterComponent() {
  const [view, setView] = useState("email");
  const [step, setStep] = useState(1);

  useEffect(() => {
    let current = localStorage.getItem("step")
    current && setStep(parseInt(current))
  },[step])

  const changeStep = (current) => {
    localStorage.setItem("step", current)
    setStep(current)
  }

  return (
    <>
      <div className="w-full bg-white m-auto min-h-screen">
        {/* Header */}
        <Header step={step} />
        {/* Sections */}
        <div className="px-6">
          {step === 1 && <Home changeStep={changeStep} view={view} setView={setView} />}
          {step === 2 && <Verify changeStep={changeStep} view={view} />}
          {step === 3 && <Register changeStep={changeStep} />}
          {step === 4 && <Secure changeStep={changeStep} />}
          {step === 5 && <Phrase changeStep={changeStep} />}
          {step === 6 && <Login changeStep={changeStep} />}
          {step === 7 && <Profile changeStep={changeStep} />}
        </div>
        {/* Footer */}
        {(step === 1 || step === 3) && (
          <Footer step={step} />
        )}
      </div>
    </>
  );
}













