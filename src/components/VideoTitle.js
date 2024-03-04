import Gif from "../assets/images/bg.gif";


const VideoTitle = () => {
  
  return (
    <>
      <section className="landing">
        {/* <video className=" video " autoPlay loop muted playsinline onclick="this.play()">
          <source src={Video} type="video/mp4" />
        </video> */}
        <img src={Gif} className="video" alt="natural environment"  />
        <div className="box-title text-white ">
          <h2 className="lato-very-bold tracking-wide ">
            be heard. be seen. be YOU
          </h2>
          <h3 className="lato-large pt-2 tracking-widest">
            a safe & supportive space to share your authentic self{" "}
          </h3>
          <div className="flex items-center ">
            <a href="https://theauthenticapproach.clientsecure.me/">
              {" "}
              <button className="call-button transition mt-6 shadow-gray-700 max-md:py-2  max-md:px-5 py-3 px-6 bg-blue-main shadow-md text-white rounded-lg hover:bg-yellow-main hover:text-slate-900 hover:translate-y-1 hover:scale-105">
                Schedule Today
              </button>{" "}
            </a>
            <a href="tel:+19452343273">
              <button className=" max-lg:block hidden call-button transition mt-6 shadow-gray-700 max-md:py-2  max-md:px-5 py-3 px-6 bg-blue-main shadow-md text-white rounded-lg hover:bg-yellow-main hover:text-slate-900 hover:translate-y-1 hover:scale-105 ml-5">
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoTitle;
