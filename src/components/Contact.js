import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import GmailCopy from './GmailCopy';
import accept from '../assets/accept.png';

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bcl3j1m', 'template_38mt5yu', form.current, '9eZo4a66V2BmGF4TC')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");

        setSubmitted(true);
        resetForm();
      }, (error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    setTimeout(() => {
      setSubmitted(false);
      setCountdown(5); // Reset countdown
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  useEffect(() => {
    let countdownTimer;
    if (submitted) {
      countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(countdownTimer);
          }
          return prevCountdown - 1;
        });
      }, 1000); // Update countdown every second
    }
    return () => clearInterval(countdownTimer);
  }, [submitted]);

  return (
    <div id='contact' className='flex-col sm:px-[1.25rem] mt-10 flex tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-[80px] sm:gap-[20px] tm:gap-[20px] sm:flex-col'>
      <div className='flex flex-col pl-[5rem] w-[36rem] tm:pt-4 lg:pt-4 sm:pt-0 tm:w-full sm:w-full tm:mb-[20px] sm:mb-[20px]'>
        <h1 className='tracking-wider font-[600] text-[1.4rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem] sm:w-[100%]'>
          Contact Me
        </h1>
        <p className=' cursor-pointer'>You can contact me at<GmailCopy/></p>
      </div>
      <div className='flex justify-center'>

        {submitted ? (
          <div className="success-message flex flex-col items-center relative">
            {/* Your success message content */}
            <img src={accept} className="check-circle-icon mb-4" style={{ width: "80px", height: "80px", color: "green", opacity: 1 }} alt='accept'/>
            <div className="success-heading" style={{ fontFamily: 'Covered By Your Grace', fontSize: '36px', fontWeight: 400, lineHeight: '39.6px', letterSpacing: '-0.02em', textAlign: 'center', color: '#2DA950', width: '237px', height: '28px', gap: '0px', opacity: 1 }}>
              I will get back to you soon!
            </div>

            <div className="redirect-message" style={{ position: 'absolute', width: '100%', bottom: '40px', fontFamily: 'Manrope', fontStyle: 'normal', fontWeight: 400, fontSize: '20px', lineHeight: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#727272' }}>
             <span className="span-text" style={{ fontWeight: 700, color: '#1C1C1C' }}></span> 
            </div>
          </div>
        ) : (
          <form className='flex flex-col gap-4 tm:w-full sm:w-full lg:w-[88%] ' ref={form} onSubmit={sendEmail}>
            <label className="form-label">Name</label>
            <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] text-black dark:bg-[#3d3e4b] h-[58px]'
              placeholder='Name'
              type="text"
              name="user_name"
              required />

            <label className="form-label">Email</label>
            <input className='p-4 rounded-[4px]  bg-[#e4e1e1fa] text-black dark:bg-[#3d3e4b] h-[58px]'
              placeholder='Email'
              type="email"
              name="user_email"
              required />

            <label className="form-label">Your Message</label>
            <textarea
              className='p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] text-black dark:bg-[#343541] h-[198px] '
              placeholder='Your message'
              type='text'
              name="message"
              required />

            <div className='flex justify-start mt-5 mb-8'>
              <button type='submit'
                className='px-[1.6em] py-[.8em] bg-[#ec6e59] coursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#ec6e59] border-2 lg:text-[.8rem] sm:text-[.8rem]'>Send</button>
            </div>
          </form>
        )}
      </div>

      <div className='flex justify-center items-center font-[350] text-[0.6rem] leading-loose sm:text-[1rem]  tm:text-[1rem] mt-10'>
        Copyright © 2023
        <span className='font-[500]'>&nbsp;Kunal Puri&nbsp; </span>
        All Rights Reserved
      </div>
    </div>
  );
}

export default Contact;
