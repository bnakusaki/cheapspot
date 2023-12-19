'use client'

import { onAuthStateChanged } from '@/app/_lib/firebase/firebase-auth';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../../public/cheapspot.png';
import ProfileMenu from './profile';
import SignInButton from './signInButton';





function Header () {
    const [user, setUser] = useState();

    onAuthStateChanged((user)=>(setUser(user)))

    return (
        <Row className="flex items-center">
            <Col span={1}/>
            <Col span={6}>
                <Link href="/">
                    <Image src={logo} className="py-2 w-[75px] lg:w-[110px] transition-all duration-100 ease-in-out active:scale-[0.9]" alt="CheapSpot Logo - An image displaying the text 'cheapspot' with the 'o' being a location icon with a blue dot inside."/>
                </Link>
            </Col>
            <Col span={10}/>
            <Col className="flex items-end justify-end" span={6}>
                {
                    user? <ProfileMenu user={user} /> : <SignInButton />
                }
            </Col>
            <Col span={1}/>
        </Row>
    );
}

export default Header;