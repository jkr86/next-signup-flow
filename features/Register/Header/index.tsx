
import Image from 'next/image';
const Header = ({step}) => {
    return (
        <div className={`${step === 6 ? "bg-gradient-to-r from-blue-400 to-purple-500 py-8" : "bg-gray-100 py-4"} flex justify-center w-full mb-6 pt-12`}>
            {step === 1 && <Image width={100} height={20} src="/images/home.png" alt="home" />}
            {step === 2 && <p className="font-semibold text-black">Verification</p>}
            {step === 3 && <p className="font-semibold text-black">Create NEAR account</p>}
            {(step === 4 || step === 5) && <p className="font-semibold text-black">Secure your account</p>}
            {step === 6 && (
                <div className="flex flex-col items-center">
                    <Image width={100} height={20} src="/images/home-white.png" alt="home" />
                    <p className="mt-2.5 text-white text-sm font-medium">a web3 gateway to hidden experiences</p>
                </div>
            )}
            {step === 7 && <p className="font-semibold text-black">Profile</p>}
        </div>
    )
}

export default Header;