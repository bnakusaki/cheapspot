'use client'
import { createErrorMessage } from '@/app/_lib/create_error_message';
import * as authentication_functions from '@/app/_lib/firebase/firebase-auth';
import { Space, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';



const SignInPage:React.FC = () => {
    // Handles feedback messages for success and failures.
    /////
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: `${email} successfully signed in`,
        });
    };

    const errorMessage = (error:String) => {
        messageApi.open({
            type: 'error',
            content: `Failed to sign in ${email}.\n (${error})`,
        });
    };
    /////

    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();
    const [confirmLoading, setConfirmLoading] = useState(false);

    const router = useRouter();

    const signInWithGoogle = async (event:any) => {
        event.preventDefault();
        setConfirmLoading(true);

        await authentication_functions.signInWithGoogle()
        .then(()=>{
            success();
            router.back();
        })
        .catch((error)=>{
            let msg = createErrorMessage({error})
            errorMessage(msg);
        });

        setConfirmLoading(false);
    }

    const signIn = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setConfirmLoading(true);

        await authentication_functions.signInWithEmailAndPassword(email, password)
        .then(()=>{
            router.back()
        })
        .catch((error)=>{
            let msg = createErrorMessage({error})
            errorMessage(msg);
        });

        setConfirmLoading(false);
    };

    return (
        <>
        {contextHolder}
        <Space>
            <div className="h-screen w-screen px-3 flex flex-col justify-center items-center">
                <div className="w-2/3 max-[550px]:w-[80%] max-[450px]:w-full flex flex-col justify-center items-center">
                    <form onSubmit={signIn} className="flex flex-col items-center justify-center w-full">
                        <h1 className="font-medium text-4xl tracking-tight text-center mb-5">Sign in</h1>
                        <div className="flex justify-center mb-7">
                            <button onClick={(e)=>{signInWithGoogle(e)}} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                                <FaGoogle size={"50%"} />
                            </button >
                            <button onClick={(event)=>{event.preventDefault();}} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300" >
                                <FaApple size={"50%"} />
                            </button>
                            <button onClick={(event)=>{event.preventDefault();}} className="border h-[50px] w-[50px] rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300" >
                                <FaFacebook size={"50%"} />
                            </button>
                        </div>
                        <span className="text-lg text-center">or sign in with email</span>
                        <div className="w-full mt-3 mb-2">
                            <label>Email</label>
                            <input type="email" required autoFocus value={email as any} onChange={(event)=>setEmail(event.target.value)} />
                        </div>
                        <div className="w-full">
                            <label >Password</label>
                            <input required type="password" value={password as any} onChange={(event)=>setPassword(event.target.value)} />
                        </div>
                        <div className="flex w-full items-end justify-end mt-5">
                            <Link href="/forgot-password" className="text-sm transition-all duration-300 ease-in-out hover:font-medium active:scale-[90%]"><span className='text-black'>Forgot password?</span></Link>
                        </div>
                        <div className="flex w-full items-end justify-end mb-7">
                            <Link href="/sign-up" className="text-sm transition-all duration-300 ease-in-out hover:font-medium active:scale-[90%]"><span className='text-black'>Sign up instead</span></Link>
                        </div>
                        {
                            confirmLoading?
                            <div className="loading-indicator"></div>:
                            <button className="border h-[50px] w-full rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                            Sign in
                        </button>
                        }
                    </form>
                </div>
            </div>
        </Space>
        </>
    )
}

export default SignInPage;
