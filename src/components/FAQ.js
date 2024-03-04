import React, { useState } from "react";



const FAQ = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);




    return (

        <section className=" bg-slate-100">
            <div className=" py-20 bg-blue-main text-white rounded-special">
                <h3 className="text-slate-100 title text-center lato-bold p-10 mb-5 tracking-widest max-sm:tracking-wide max-sm:text-3xl">FREQUENTLY ASKED QUESTIONS</h3>
                <div className="pb-10">


                    <div className="mx-auto p-3 border-b max-sm:mx-6  w-2/3 max-sm:w-11/12">
                        <div className="w-full flex justify-between items-center  hover:text-yellow-main focus:text-yellow-main cursor-pointer" onClick={() => setShow1(!show1)}>
                            <h4 className=" transition  text-xl p-3 max-sm:text-lg " >Can I book sessions outside of business hours?</h4>
                            <i className={show1 ? 'hidden  ' : "transition fa-solid fa-chevron-down text-white p-4 rounded-3xl "}></i>
                            <i className={show1 ? "transition fa-solid fa-chevron-up text-white p-4 rounded-3xl " : 'hidden  '}></i>
                        </div>


                        <div className={show1 ? ' ' : 'hidden  '}>
                            <p className=" text-slate-300 py-2 px-5 text-lg max-sm:text-base">Life is not 9-5 and neither are we. We are flexible to book sessions at a time that accommodates your schedule. </p>
                        </div>
                    </div>
                    <div className=" mt-2 mx-auto p-3 max-sm:mx-6 border-b w-2/3 max-sm:w-11/12">

                        <div className="w-full flex justify-between items-center  hover:text-yellow-main focus:text-yellow-main cursor-pointer" onClick={() => setShow2(!show2)}>
                            <h4 className=" transition  text-xl p-3 max-sm:text-lg " >How long is a typical session?</h4>
                            <i className={show2 ? 'hidden  ' : "transition fa-solid fa-chevron-down text-white p-4 rounded-3xl "}></i>
                            <i className={show2 ? "transition fa-solid fa-chevron-up text-white p-4 rounded-3xl " : 'hidden  '}></i>
                        </div>

                        <div className={show2 ? ' ' : 'hidden  '}>
                            <p className="text-slate-300 py-2 px-5 text-lg max-sm:text-base">Session lengths and times will vary depending on your needs and will be scheduled weekly, bi-weekly, or monthly based on your preference.</p>
                        </div>
                    </div>
                   
                    <div className="mt-2 mx-auto p-3 max-sm:mx-6 border-b w-2/3 max-sm:w-11/12">

                        <div className="w-full flex justify-between items-center hover:text-yellow-main focus:text-yellow-main cursor-pointer" onClick={() => setShow4(!show4)}>
                            <h4 className=" transition  text-xl p-3 max-sm:text-lg  hover:text-yellow-main focus:text-yellow-main cursor-pointer" >Does the Authentic Approach take my insurance?</h4>
                            <i className={show4 ? 'hidden  ' : "transition fa-solid fa-chevron-down text-white p-4 rounded-3xl "}></i>
                            <i className={show4 ? "transition fa-solid fa-chevron-up text-white p-4 rounded-3xl " : 'hidden  '}></i>
                        </div>


                        <div className={show4 ? ' ' : 'hidden'}>
                            <p className="text-slate-300 py-2 px-5 text-lg max-sm:text-base">We accept Aetna, BCBS, Cigna, and Optum. We also offer a sliding scale rate for those that qualify. </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FAQ;