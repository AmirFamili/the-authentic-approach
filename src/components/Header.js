import ComputerLogo from "../images/TheAuthenticApproach-logo.png";
import MobileLogo from "../images/TheAuthenticApproach-mobile.png";


const Header = () => {
    return (

        <header className="z-20 py-2 px-8 flex justify-between items-center absolute w-full">
            <a href="#">
                <img className=" max-lg:hidden" src={ComputerLogo} alt="TheAuthenticApproach" />
                <img className="hidden max-lg:block" src={MobileLogo} alt="TheAuthenticApproach" />
            </a>
           <a href="tel:+19452343273"><button
                className="call-button shadow-gray-700 max-md:py-2  max-md:px-4 py-3 px-5 bg-blue-main shadow-lg text-white rounded-lg hover:bg-yellow-main hover:text-slate-900">Call me</button></a> 
        </header>
    );
}

export default Header;