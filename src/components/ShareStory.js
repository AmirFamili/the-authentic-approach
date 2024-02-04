import Share from '../assets/images/shareStory.webp'


const ShareStory = () => {
    return ( 
        <section className="share-box p-10 pb-28 bg-slate-200 max-lg:pt-20 ">
            <div className=" m-2 max-lg:mt-7 flex justify-around items-center max-lg:block">
                <img className='rounded-2xl w-1/2 
                  max-lg:w-full max-lg:mb-10' src={Share} alt="share story"/>
                <div className="p-5 w-1/2  max-lg:w-full">
                    <h4 className="text-center p-3 text-2xl text-blue-main tracking-wider">MY LOVE LANGUAGE IS REMINDING YOU OF YOUR POWER</h4>
                    <p className="text-center p-3 tracking-wide text-lg">Deciding to seek therapy can be overwhelming and stressful. Choosing a counselor who will meet you where you are emotionally and who can provide a safe and supportive space is an important step in the process.  </p>
                    <div className='w-full text-center  m-2 '>
                        <a href='https://theauthenticapproach.clientsecure.me/' className='  text-center m-2  transition shadow-gray-700 max-md:py-3  max-md:px-5 py-4 px-6 bg-blue-main shadow-lg text-white rounded-lg hover:bg-yellow-main hover:text-slate-900 hover:translate-y-1 hover:scale-105 ' type="button">Schedule A Free Consultation</a>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default ShareStory;