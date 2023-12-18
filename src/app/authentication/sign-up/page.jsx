
'use client'


import { createErrorMessage } from "@/lib/create_error_message";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import * as authentication_functions from "../../../firebase/firebase-auth";


export default function SignUpPage () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [processingSignUp, setProcessingSignUp] = useState(false);
    const [error, setError] = useState();

    const router = useRouter();



    const signInWithGoogle = async(event)=>{
        event.preventDefault();
        setProcessingSignUp(true);
        setError();
        await authentication_functions.signInWithGoogle()
        .then(()=>{router.push("/")})
        .catch((error)=>{setError(error)});
        setProcessingSignUp(false);
    }

    const signUp = async(event)=>{
        event.preventDefault();
        setProcessingSignUp(true);
        setError();
        await authentication_functions.signUpWithEmailAndPassword(name, email, password)
        .then(()=>{router.push("/")})
        .catch((error)=>{setError(error)});
        setProcessingSignUp(false);
    };


    return (
        <div className="h-screen w-full px-3 flex flex-col justify-center items-center">
            <div className="w-2/3 max-[550px]:w-[80%] max-[450px]:w-full flex flex-col justify-center items-center">
            <form onSubmit={signUp} className="flex flex-col items-center justify-center w-full">
                <h1 className="font-medium text-4xl tracking-tight text-center">Create account</h1>

                <div className="mt-5"/>

                <div className="flex justify-center">
                    <button onClick={signInWithGoogle} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                        <FaGoogle size={"50%"} />
                    </button>
                    <button onClick={(event)=>{event.preventDefault();}} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                        <FaApple size={"50%"} />
                    </button>
                    <button onClick={(event)=>{event.preventDefault();}} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                        <FaFacebook size={"50%"} />
                    </button>
                </div>

                <div className="mt-5"/>

                <span className="text-lg text-center">or use your email for registeration</span>

                <div className="mt-2"/>

                <div className="w-full">
                    <label >Name</label>
                    <input type="text" required autoFocus value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="mt-2"/>
                <div className="w-full">
                    <label >Email</label>
                    <input style={error?{borderColor:'red'}:null} type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mt-2"/>
                <div className="w-full">
                    <label >Password</label>
                    <input type="password" required minLength={6} value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <div className="mt-4"/>

                <div className="flex w-full items-end justify-end">
                    <Link href="/authentication/sign-in" className="text-left text-sm transition-all duration-300 ease-in-out hover:font-medium active:scale-[90%]" >Sign in instead</Link>
                </div>

                <div className="mt-7"/>
            {
                processingSignUp?
                <div className="loading-indicator"></div>:
                <button
                className="border h-[50px] w-full rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300"
                id="sign-up-button"
                >
                Sign up
            </button>
            }
            <div className="p-3" />
            <div>
                {
                    error? <p className="text-red-500 text-sm">{createErrorMessage({error})}</p> : null
                }
            </div>
        </form>
            </div>
        </div>
    );
}
