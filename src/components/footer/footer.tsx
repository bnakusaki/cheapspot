import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/cheapspot.png';

function Footer () {
    return (
        <div className="w-full h-16 mt-8 border-t-2 p-3 md:px-14">
            <div>
                <Link href="/">
                    <Image src={logo} className="py-2 w-[70px] lg:w-[110px] transition-all duration-100 ease-in-out active:scale-[0.9]" alt="CheapSpot Logo - An image displaying the text 'cheapspot' with the 'o' being a location icon with a blue dot inside."/>
                </Link>
            </div>
            <p className="text-xs">Your one-stop destination for the most affordable products in every category—no endless browsing, just unbeatable prices, guaranteed.</p>
            <div className="mb-5"/>
            <p className="text-xs">Do you know of a less expensive product, do you have any inquiries, would you like to make a special request, or are you interested in assisting developers at CheapSpot?</p>
        </div>
    );
}

export default Footer;