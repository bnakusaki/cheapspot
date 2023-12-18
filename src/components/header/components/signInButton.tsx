import { Button } from 'antd';
import Link from 'next/link';

function SignInButton () {
    return (
        <Link href="/authentication/sign-in" className="">
            <Button type="text">Sign in </Button>
        </Link>
    )
}

export default SignInButton;