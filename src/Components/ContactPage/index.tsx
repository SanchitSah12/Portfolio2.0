import './index.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import Map from './Map';
import PageWrapper from '../Layout';
import AnimatedLetters from '../AnimatedLetters';
import Icons from './Icons';

const SERVICE_ID = "service_dnqo4tp";
const TEMPLATE_ID = "template_yhzl5a9";
const USER_ID = "user_mYSixpJjWbz9jyZ9iqwYr";
const Contact = () => {
    const form = useRef();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            Swal.fire({
                icon:'warning',
                title:'Enter a valid Email'
            })
            return;
          }
      
          // Validate message
          if (!message) {
            Swal.fire({
                icon:'warning',
                title:'Enter a valid Message'
            })
            return;
        }

        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, USER_ID)
            .then((result: { text: string; }) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
    };
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <PageWrapper>
            <section className="reveal mt-5 flex flex-row space-x-40 justify-center" id="contact">
                <div className=''>
                    <h1 className='font-display text-4xl text-center font-bold mb-4'>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={"The Contact Page".split("")}
                            idx={8} />
                    </h1>
                    <p className="text-center lg:mb-5 text-[#ffd700]">Connect with me, send an email.</p>

                    <div className='lg:hidden'>
                        <Icons />
                    </div>
                    <div className='flex'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-col lg:ml-5 w-64 lg:w-96" >
                                <div className="flex flex-col">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input className="input input-bordered input-warning w-full max-w-lg" type="text"  name="from_name" />
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input className="input input-bordered input-warning w-full max-w-lg" type="email" value={email} onChange={e => setEmail(e.target.value)} name="user_email" required/>
                                </div>

                                <div className="flex flex-col">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-warning" value={message} onChange={e => setMessage(e.target.value)} name="message" required/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="label">
                                        <span className="label-text">Suggestions</span>
                                    </label>
                                    <textarea className="textarea textarea-warning" name="suggestions" />
                                </div>
                                <br />
                                <input className="btn btn-warning" type="submit" value="Send" />
                                {/* <div className="w-full py-7 -translate-y-14 hover:bg-gray-500 hover:bg-opacity-60 "></div> */}

                            </div>

                        </form>
                    </div>
                </div>
                <div className="hidden lg:block mt-24">
                    {/* <Map /> */}
                    <Icons></Icons>
                </div>
            </section>
        </PageWrapper>
    );
};

export default Contact;