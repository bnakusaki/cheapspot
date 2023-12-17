"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import * as authentication_functions from "../../../firebase/firebase-auth";

export default function SignInPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const router = useRouter();

    const signInWithGoogle = async(event)=>{
        event.preventDefault();
        setIsLoading(true);
        setError()
        await authentication_functions.signInWithGoogle()
        .then(()=>{router.push("/")})
        .catch((error)=>{setError(error)});
        setIsLoading(false);
    }

    const signIn = async(event)=>{
        event.preventDefault();
        setIsLoading(true);
        setError()
        await authentication_functions.signInWithEmailAndPassword(email, password)
        .then(()=>{router.push("/")})
        .catch((error)=>{setError(error)});
        setIsLoading(false);
    };

    return (
        <div className="h-screen w-full px-3 flex flex-col justify-center items-center">
            <div className="w-2/3 max-[550px]:w-[80%] max-[450px]:w-full flex flex-col justify-center items-center">
            <form onSubmit={signIn} className="flex flex-col items-center justify-center w-full">
                <h1 className="font-medium text-4xl tracking-tight text-center">Sign in</h1>
                <div className="mt-5"/>
                <div className="flex justify-center">
                    <button onClick={signInWithGoogle} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                        <FaGoogle size={"50%"} />
                    </button >
                    <button onClick={(event)=>{event.preventDefault();}} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300" >
                        <FaApple size={"50%"} />
                    </button>
                    <button onClick={(event)=>{event.preventDefault();}} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300" >
                        <FaFacebook size={"50%"} />
                    </button>
                </div>
                <div className="mt-5"/>
                <span className="text-lg text-center">or sign in with email</span>
                <div className="mt-3"/>
                <div className="w-full">
                    <label>Email</label>
                    <input type="email" required autoFocus value={email} onChange={(event)=>setEmail(event.target.value)} />
                </div>
                <div className="mt-2"/>
                <div className="w-full">
                    <label >Password</label>
                    <input required type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                </div>
                <div className="mt-5"/>
                <div className="flex w-full items-end justify-end text-left text-sm transition-all duration-300 ease-in-out hover:font-medium active:scale-[90%]">
                    <Link href="/authentication/forgot-password"><p >Forgot password?</p></Link>
                </div>

                <div className="flex w-full items-end justify-end text-left text-sm transition-all duration-300 ease-in-out hover:font-medium active:scale-[90%]">
                    <Link href="/authentication/sign-up" >Sign up instead</Link>
                </div>

                    <div className="mt-7"/>

                    {
                        isLoading?
                        <div className="loading-indicator"></div>:
                        <button className="border h-[50px] w-full rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                        Sign in
                    </button>
                    }
                    <div className="p-3" />
                    {
                        (typeof error) != 'undefined'?<div className="text-red-600 text-center">{`Something went wrong: ${error}`}</div> :null
                    }
                </form>
            </div>
        </div>
    )
}
