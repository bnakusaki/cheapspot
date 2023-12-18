"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as authentication_functions from "../../firebase/firebase-auth";

export default function AccountPage () {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();


    const signOut = async()=>{
        setIsLoading(true);
        await authentication_functions.signOut()
        .then(()=>{router.push("/")});
        setIsLoading(false);
    }

    return (
        <div className="m-3 md:mx-14">
            <h1 className="text-xl font-medium">Account</h1>
            <div className="border-t-1 my-2"/>
            {
                isLoading?
                    <div className="loading-indicator"></div>
                    :<a onClick={()=>{signOut()}} className="text-red-500 hover:font-medium">Sign out</a>
            }
        </div>
    );
}
