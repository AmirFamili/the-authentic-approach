import Video from '../assets/images/natural.mp4';


const VideoTitle = () => {

    return (
        <>
       
            <section className="landing  ">
                <video className=" video " src={Video} autoPlay loop muted />

                <div className="box-title text-white ">
                   <h2 className="lato-very-bold tracking-wide">be heard. be seen. Be YOU</h2>
                    <h1 className="lato-large pt-2 tracking-widest">A safe & supportive space to share your authentic self </h1>
                    <a href="https://theauthenticapproach.clientsecure.me/"> <button className="call-button transition mt-6 shadow-gray-700 max-md:py-2  max-md:px-5 py-3 px-6 bg-blue-main shadow-md text-white rounded-lg hover:bg-yellow-main hover:text-slate-900 hover:translate-y-1 hover:scale-105">Schedule Today</button> </a>

                </div>
            </section>


        </>
    );
}

export default VideoTitle;