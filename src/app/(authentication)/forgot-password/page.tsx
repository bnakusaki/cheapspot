'use client'
import { createErrorMessage } from '@/app/_lib/create_error_message';
import * as authentication_functions from '@/app/_lib/firebase/firebase-auth';
import { Space, message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



const ForgotPasswordPage:React.FC = ()=>{
    // Handles feedback messages for success and failures.
    /////
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: `The password reset email has been successfully sent to ${email}`,
        });
    };

    const errorMessage = (error:String) => {
        messageApi.open({
            type: 'error',
            content: `Failed to send the password reset email to ${email}.\n (${error})`,
        });
    };
    /////


    const [email, setEmail] = useState<String>();
    const [confirmLoading, setConfirmLoading] = useState<Boolean>(false);

    const sendPasswordResetEmail = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setConfirmLoading(true);

        await authentication_functions.sendPasswordResetEmail(email)
        .then(()=>{
                success();
            })
        .catch((error)=>{
            let msg = createErrorMessage({error})
            errorMessage(msg);
        });

        setConfirmLoading(false);
    };

    const router = useRouter();

    return (
        <>
            {contextHolder}
            <Space>
                <div className="w-screen h-screen flex justify-center items-center p-3">
                    <div className="w-2/3 max-[550px]:w-[80%] max-[450px]:w-full flex flex-col justify-center items-center">
                        <form onSubmit={(e)=>{sendPasswordResetEmail(e)}} className="flex flex-col items-center justify-center w-full">
                            <h1 className="font-medium text-4xl tracking-tight text-center mb-5">Forgot password</h1>
                            <p className="text-lg text-center mb-5">
                                Please enter your email address below, and {"we'll"} send you a link to reset your password. Make sure to check your inbox (and spam folder, just in case) for further instructions. Thank you
                            </p>
                            <div className="w-full">
                                <label>Email</label>
                                <input type="email" required  autoFocus value={email as any} onChange={(event)=>setEmail(event.target.value)} />
                            </div>
                            <div className="flex w-full items-end justify-end text-left mt-5 mb-7">
                            <button onClick={()=>{router.back();}} className="text-sm transition-all duration-300 ease-in-out hover:font-medium active:scale-[90%]">
                                Sign in instead
                            </button>
                            </div>
                                {
                                    confirmLoading?
                                    <div className="loading-indicator"></div>:
                                    <button className="border h-[50px] w-full rounded-lg mx-3 inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                                        Send password reset link
                                    </button>
                                }
                            <div className="p-3" />
                        </form>
                    </div>
                </div>
            </Space>
        </>

    );
}


export default ForgotPasswordPage;