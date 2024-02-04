import ComputerLogo from "../assets/images/TheAuthenticApproach-logo.png";
import MobileLogo from "../assets/images/TheAuthenticApproach-mobile.png";


const Header = () => {
    return (

        <header id="header" className="z-20 py-2 px-8 flex justify-between items-center absolute w-full">
            <a href="">
                <img className=" max-lg:hidden " src={ComputerLogo} alt="TheAuthenticApproach" />
                <img className="hidden max-lg:block max-sm:w-11/12 max-sm:pt-2" src={MobileLogo} alt="TheAuthenticApproach" />
            </a>
           <a href="tel:+19452343273"><button
                className="call-button transition shadow-gray-700 max-md:py-2  max-md:px-4 py-3 px-5 bg-blue-main shadow-lg text-white rounded-lg hover:bg-yellow-main hover:text-slate-900 hover:translate-y-1 hover:scale-105">Call Now</button></a> 
        </header>
    );
}

export default Header;