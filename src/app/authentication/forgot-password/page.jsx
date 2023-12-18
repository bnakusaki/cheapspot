"use client"
import { createErrorMessage } from "@/lib/create_error_message";
import Link from "next/link";
import { useState } from "react";
import * as authentication_functions from "../../../firebase/firebase-auth";


export default function ForgotPasswordPage() {
    return (
        <div div className="w-screen h-screen flex justify-between">
            <ForgotPasswordForm />
            {/* <div className="hidden h-full w-1/2 translate-x-[100%] bg-black rounded-tl-[1.5rem] rounded-bl-[1.5rem] text-white lg:block lg:flex flex-col items-center text-center justify-center p-5">
                <h1 className="text-2xl">
                    Oops! Forgotten your password?
                </h1>
                <p className='text-lg leading-6 tracking-wide my-5 mx-0'>
                    {"No worries! We've got you covered. Please enter your email address below, and we'll send you a link to reset your password. Make sure to check your inbox (and spam folder, just in case) for further instructions."}
                    <br />
                    <br />
                    Thank you for choosing <span>CheapSpot!</span>
                </p>
            </div> */}
        </div>
    );
}

function ForgotPasswordForm () {
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const sendPasswordResetEmail = async(event)=>{
        event.preventDefault();
        setIsLoading(true);
        setError()
        await authentication_functions.sendPasswordResetEmail(email)
        .then(()=>{})
        .catch((error)=>{setError(error)});
        setIsLoading(false);
    };

    return (
        <div className="h-screen w-full px-3 flex flex-col justify-center items-center">
            <div className="w-2/3 max-[550px]:w-[80%] max-[450px]:w-full flex flex-col justify-center items-center">
                <form onSubmit={sendPasswordResetEmail} className="flex flex-col items-center justify-center w-full">
                    <h1 className="font-medium text-4xl tracking-tight text-center">Forgot password</h1>
                    <div className="mt-5"/>
                    <p className="text-lg text-center">Please enter your email address below, and {"we'll"} send you a link to reset your password. Make sure to check your inbox (and spam folder, just in case) for further instructions. Thank you</p>
                    <div className="mt-3"/>
                    <div className="w-full">
                        <label>Email</label>
                        <input type="email" style={error?{borderColor:'red'}:null} required autoFocus value={email} onChange={(event)=>setEmail(event.target.value)} />
                        {
                            error? <p className="text-red-500 text-sm">{createErrorMessage({error})}</p> : null
                        }
                    </div>
                    <div className="mt-5"/>

                    <div className="flex w-full items-end justify-end text-left">
                        <Link href="/authentication/sign-in"><p className="text-sm transition-all duration-300 ease-in-out hover:font-medium active:scale-[90%]">Sign in instead</p></Link>
                    </div>

                    <div className="mt-7"/>

                        {
                            isLoading?
                            <div className="loading-indicator"></div>:
                            <button className="border h-[50px] w-full rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                                Send password reset link
                            </button>
                        }
                    <div className="p-3" />
                </form>
            </div>
        </div>
    );
}