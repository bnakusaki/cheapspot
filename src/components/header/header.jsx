'use client'

import { onAuthStateChanged } from '@/firebase/firebase-auth';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../public/cheapspot.png';
import userIcon from '../../../public/user.png';

function SignInButton () {
    return (
        <Link href="/authentication/sign-in" className="">
            <div className="flex items-center px-5 py-2 rounded-lg hover:border hover:font-medium hover:bg-gray-100 hover:shadow-sm transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9]">
                <div>
                    <Image src={userIcon} width="20" height="20" alt="A user icon behind the sign up text" />
                </div>
                <div className="mr-3" />
                <div className="text-sm md:text-lg">
                    Sign in
                </div>
            </div>
        </Link>
    )
}

function Profile ({user}) {
    return (
        <Link href="/account" className="">
            <div className="flex items-center py-2 rounded-lg hover:px-5 hover:border hover:font-medium hover:bg-gray-100 hover:shadow-sm transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9]">
                <div className="text-sm md:text-lg">
                    {user.displayName}
                </div>
                <div className="mr-3" />
                <div>
                    <Image src={user.photoURL} objectFit='cover' className="bg-slate-300 rounded-full" width="30" height="30" alt="A user icon behind the sign up text" />
                </div>
            </div>
        </Link>
    );
}


function Header () {
    const [user, setUser] = useState();

    onAuthStateChanged((user)=>(setUser(user)))

    return (
        <div className="flex items-centerd w-screen items-center justify-between my-3 px-3 md:px-14 h-8 md:h-10">
            <div>
                <Link href="/">
                    <Image src={logo} className="py-2 w-[100px] lg:w-[110px] transition-all duration-100 ease-in-out active:scale-[0.9]" alt="CheapSpot Logo - An image displaying the text 'cheapspot' with the 'o' being a location icon with a blue dot inside."/>
                </Link>
            </div>
            <div>
                {
                    user?<Profile user={user} /> : <SignInButton />
                }
            </div>
        </div>
    );
}

export default Header;