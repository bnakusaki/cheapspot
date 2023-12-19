import { Button } from 'antd';
import Link from 'next/link';

function SignInButton () {
    return (
        <Link href="/sign-in" className="flex items-center justify-end">
            <Button type="text">Sign in </Button>
        </Link>
    )
}

export default SignInButton;