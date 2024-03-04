import MobileLogo from "../assets/images/TheAuthenticApproach-mobile.png";


const Header = () => {
    return (

        <header id="header" className="z-20 py-2 px-8 max-md:px-4 flex justify-between items-center absolute w-full">
            <a href="#">
                <div className="flex items-center">
                     <img className=" w-24 max-md:w-16 " src={MobileLogo}  alt="TheAuthenticApproach" />
                     <h1 className=" pl-3 text-3xl  text-white tracking-widest font-extrabold max-md:text-2xl max-sm:text-md max-md:hidden" >THE AUTHENTIC APPROACH</h1>
                     <h1 className="logo pl-3 text-3xl  text-white tracking-widest font-extrabold  hidden max-md:block"><span className="block">the</span><span className="block">AUTHENTIC</span>  APPROACH</h1>
                </div>
               
               
            </a>
           <a href="tel:+19452343273"><button
                className=" max-lg:hidden call-button transition shadow-gray-700 max-md:py-2  max-md:px-4 py-3 px-5 bg-blue-main shadow-lg text-white rounded-lg hover:bg-yellow-main hover:text-slate-900 hover:translate-y-1 hover:scale-105">Call Now</button></a> 
        </header>
    );
}

export default Header;