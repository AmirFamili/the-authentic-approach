import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [loading, setLoading] = useState(false);


    return (
        <section className='bg-slate-100 p-5'>
            <h4 className=" lato-light pt-10 text-center tracking-widest max-sm:tracking-wide max-sm:text-sm">I WANT TO HEAR FROM YOU</h4>
            <h3 className="text-blue-main title text-center lato-bold pt-2  pb-10 mb-5 tracking-widest max-sm:tracking-wide max-sm:text-3xl">GET IN TOUCH</h3>

            <div className="p-10 flex justify-around items-center max-md:block ">
                <div data-aos="fade-right" className="w-1/2 max-md:w-full">
                    <Formik initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        message: ""

                    }}

                        onSubmit={(values) => {
                            setLoading(true);
                            emailjs
                                .send(
                                    'service_nd1ql4l',
                                    'template_10l013s',
                                    {
                                        from_name: values.name ,
                                        to_name: "Golnaz",
                                        from_number:values.phone,
                                        from_email: values.email,
                                        to_email: "golnazlcsw@gmail.com",
                                        message: values.message,
                                    },
                                    'ILFzRPGLT1I6UwRip'
                                )
                                .then(
                                    () => {
                                        setLoading(false);
                                        alert("Thank you. I will get back to you as soon as possible.");
                                        values.name = '';
                                        values.email = '';
                                        values.phone = '';
                                        values.message = '';

                                    },
                                    (error) => {
                                        setLoading(false);
                                        console.error(error);

                                        alert("Ahh, something went wrong. Please try again.");
                                    }
                                );
                           
                           
                        }}


                        validate={(values) => {
                            const errors = {};


                            if (values.name === '') {

                                errors.name = 'Name is required';
                            }

                            if (values.email === '') {

                                errors.email = 'Provide valid email';
                            } else if (!values.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                                errors.email = 'This is not a valid email'
                            }

                            if (values.phone === '') {

                                errors.phone = 'Phone is required';
                            } else if (!values.phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
                                errors.phone = 'This is not a valid phone'
                            }

                            if (values.message === '') {
                                errors.message = 'Message is required';
                            }

                            return errors;
                        }}
                    >



                        <Form className="form-registration max-sm:text-sm" action="index.html" enctype="multipart/form-data">


                            <div className='pb-3 '>
                                <label for="name" >Name</label>

                                <Field type="text" name="name" className="name email border w-full rounded-md h-10 mt-1  p-2 outline-none hover:border-yellow-main focus:border-yellow-main transition " />
                                <ErrorMessage name='name' >
                                    {(errorMsg) => <div className="error text-red-600 pt-2">{errorMsg}</div>}
                                </ErrorMessage>
                            </div>

                            <div className='pb-3'>
                                <label for="email">Email Address</label>

                                <Field type="email" name="email" className="email border w-full rounded-md h-10 mt-1  p-2 outline-none hover:border-yellow-main focus:border-yellow-main transition " />

                                <ErrorMessage name='email' >
                                    {(errorMsg) => <div className="error text-red-600 ">{errorMsg}</div>}
                                </ErrorMessage>
                            </div>


                            <div className='pb-3'>

                                <label for="phone">Phone Number</label>
                                <Field type="phone" name="phone" className="phone border w-full rounded-md h-10 mt-1  p-2 outline-none hover:border-yellow-main focus:border-yellow-main transition " />

                                <ErrorMessage name='phone' >
                                    {(errorMsg) => <div className="error text-red-600 ">{errorMsg}</div>}
                                </ErrorMessage>
                            </div>

                            <div className='pb-3 '>
                                <label for="message" >Messsage</label>
                                <Field as="textarea" name="message" className="message border  w-full rounded-md h-56 mt-1  p-2 outline-none  hover:border-yellow-main focus:border-yellow-main transition " />
                                <ErrorMessage name='message' >
                                    {(errorMsg) => <div className="error text-red-600 ">{errorMsg}</div>}
                                </ErrorMessage>
                            </div>

                            <button className="submit transition bottom-0 max-md:bottom-5 max-md:right-10 bg-blue-main text-white right-0 py-2 px-4 rounded-md hover:bg-yellow-main hover:text-dark hover:translate-y-1 hover:scale-105 " type="submit" >{loading ? "Sending..." : "Send"}</button>



                        </Form>

                    </Formik>
                </div>
                <div data-aos="fade-left" className="md:pl-5 max-md:ml-5">
                    <h5 className="lato  pt-10  tracking-widest max-sm:tracking-wide ">CONNECT WITH US</h5>
                    <div className="pt-5">
                        <p className='py-2'>
                            <a href="tel:+19452343273" className='hover:text-yellow-main '><i class="fa-solid fa-phone text-white bg-blue-main p-2 rounded-full shadow-md  "></i> <span className='tracking-widest pl-2  '>945-234-3273</span></a>
                        </p>

                        <p className='py-2'>
                            <a href="mailto:info@theauthenticapproach.life" className='hover:text-yellow-main transition'><i class="fa-solid fa-envelope  text-white bg-blue-main p-2 rounded-full shadow-md"></i> <span className='sm:tracking-widest pl-2 lg:text-base sm:text-sm '>info@theauthenticapproach.life</span></a>
                        </p>

                        <div className="text-center p-5 h-12">
                            <a href="https://www.facebook.com/people/The-Authentic-Approach/61551821399497/?mibextid=2JQ9oc" className='m-2 text-xl '> <i class="transition fa-brands fa-facebook text-white bg-blue-main hover:bg-yellow-main p-2 rounded-full shadow-md hover:translate-y-1 hover:scale-105"></i></a>

                            <a href="https://www.instagram.com/theauthenticapproach/" className='m-2 text-xl'> <i class="transition fa-brands fa-instagram text-white bg-blue-main hover:bg-yellow-main p-2 rounded-full shadow-md hover:translate-y-1 hover:scale-105"></i></a>
                        </div>


                    </div>
                </div>

            </div>



        </section >
    );
}

export default Contact;