import ComputerLogo from "../images/TheAuthenticApproach-logo.png";
import MobileLogo from "../images/TheAuthenticApproach-mobile.png";


const Header = () => {
    return (

        <header className=" py-2 px-8 flex justify-between items-center">
            <a href="#">
                <img className=" max-lg:hidden" src={ComputerLogo} alt="TheAuthenticApproach" />
                <img className="hidden max-lg:block" src={MobileLogo} alt="TheAuthenticApproach" />
            </a>
           <a href="tel:+19452343273"><button
                class="call-button max-md:py-2  max-md:px-4 py-3 px-5 bg-blue-main shadow-lg text-white rounded-lg hover:bg-yellow-main hover:text-slate-900">Call me</button></a> 
        </header>
    );
}

export default Header;