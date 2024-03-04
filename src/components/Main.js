import Img1 from "../assets/images/golnaz.jpg";

const Main = () => {
  return (
    <div className="px-10 py-10 pb-28 bg-blue-main max-md:px-5 ">
      <h3 className="title text-center lato-bold  text-white p-10 mb-10 tracking-widest max-sm:tracking-wide max-sm:text-3xl">
        WELCOME!
      </h3>
      <div className="main-box m-5 rounded-lg bg-slate-200 max-sm:m-0 ">
        <div
          data-aos="fade-up"
          className="  p-10 flex justify-center items-center max-lg:block  max-lg:p-28 max-md:p-6"
        >
          <div className=" w-1/3 ml-2 max-lg:w-full  justify-center items-center hidden max-lg:flex max-lg:mt-2 max-lg:ml-0">
            <img
              className="rounded-2xl w-2/3  max-lg:w-full shadow-xl"
              src={Img1}
              alt="Golnaz Anbar"
            />
          </div>
          <div className="w-1/2 max-lg:w-full p-5 max-md:px-2 ">
            <p className="lato-medium mt-5 text-2xl max-sm:text-lg text-blue-main ">
              I am Golnaz Anbarghalami, LCSW. The Authentic Approach is a
              culmination of my experiences in social services and mental health
              since 2008. It is a privilege and honor to hear the stories that
              have shaped your life.
            </p>
            <p className="lato-medium mt-4 text-2xl max-sm:text-lg text-blue-main ">
              The people you love, those you’ve lost, those who’ve caused pain,
              those you feel you can’t live without. Love at first sight, love
              lost, misaligned relationships. Cultural celebrations, identity
              conflict, parental dysfunction, personal insecurities, growing
              pains, embracing aging. Successes like personal wins, professional
              growth, family prosperity; struggles like unrealized goals,
              difficulty with interpersonal communication, failed commitments, and stress.
            </p>
            <p className="lato-medium mt-4 text-2xl max-sm:text-lg  text-blue-main">
              Whatever your motivation, let me help guide you in discovering
              YOUR authentic approach to navigating and living your best life
              through counseling or coaching services today.
            </p>
        
          </div>

          <div className=" w-1/3 ml-2 max-lg:w-full flex justify-center items-center max-lg:hidden">
            <img
              className="rounded-2xl w-2/3  max-lg:w-full shadow-xl"
              src={Img1}
              alt="Golnaz Anbar"
            />
          </div>
        </div>
        <div className="w-full pb-10 mb-5 text-center">
          <a
            href="https://theauthenticapproach.clientsecure.me/"
            className=" w-1/5 max-md:w-2/5 max-sm:w-3/5 m-auto  text-center   transition shadow-gray-700 max-md:py-3  max-md:px-5 py-4 px-6 bg-blue-main shadow-lg text-white rounded-lg hover:bg-yellow-main hover:text-slate-900 hover:translate-y-1 hover:scale-105 "
            type="button"
          >
            Schedule A Free Consultation
          </a>
          <p className="text-center font-bold text-2xl my-10 p-3 text-blue-main max-md:text-xl max-sm:text-lg" >
            MY LOVE LANGUAGE IS REMINDING YOU OF YOUR POWER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
