import React, { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { emailPublicKey, emailServiceId, emailTemplateId } from "./env-variable";
import { LuLoaderCircle } from "react-icons/lu";
const Contact = (): React.JSX.Element => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(emailServiceId, emailTemplateId, form.current, {
        publicKey: emailPublicKey,
      })
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
    
    <section className='pt-28 px-40  max-mdLap:px-20 max-tab:px-12 max-mdPhone:px-4'>

      <div className='flex gap-4 min-h-40 justify-center text-center max-mdLap:flex-col'>
        <div className='h-[inherit] flex flex-col gap-4 flex-1 '>
          {/* LinkedIn Section */}
          <a className='flex-1 bg-[#202022] p-6 rounded-md space-y-2 place-items-center '
            target='_blank'
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/opeyemi-ayinde-08540823b/"
          >
            <IoLogoLinkedin className="size-10" />
          </a>
          {/* Email Section */}

          <a className='flex-1 dfAc bg-[#202022] p-6 rounded-md space-y-2'
            href="mailto:abdulqudusayinde60@gmail.com"
          >
            abdulqudusayinde60@gmail.com
          </a>
        </div>

        {/* GitHub Section */}
        <a
          className='bg-[#202022] p-6 rounded-md space-y-2 place-items-center h-[inherit] flex-1'
          target='_blank'
          rel="noopener noreferrer"
          href="https://github.com/ayindequdus22"
        ><IoLogoGithub className="text-white size-20" />
          <h1 className='text-3xl font-semibold max-mdPhone:text-2xl'>Github Profile</h1>
          <p className='text-lg max-mdPhone:text-base'>Find more of my amazing projects here</p>
        </a>


      </div>
    </section>

      <form ref={form} onSubmit={sendEmail} className="mt-20 mb-10 space-y-2 px-40  max-mdLap:px-20 max-tab:px-12 max-mdPhone:px-4">
      
     <h2  className='text-2xl font-semibold max-mdPhone:text-xl'>Get in Touch</h2> 
        <div>
          <label className="block text-sm mb-1 text-gray-300">Name</label>
          <input
            required type="text"
            name="name"
            placeholder="John Doe"
            className="w-full rounded-lg bg-[#26262A] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            required type="email"
            name="email" id="email"

            placeholder="john.doe@example.com"
            className="w-full rounded-lg bg-[#26262A] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm mb-1 text-gray-300">Message</label>
          <textarea
            name="message" id="message"
            placeholder="Enter your message here"
            rows={4}
            className="resize-none w-full rounded-lg bg-[#26262A] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit" disabled={loading}
          className="w-full bg-[#3A3A3F] hover:bg-[#4a4a52] text-white font-medium py-3 rounded-lg transition-colors place-items-center"
        >
          {loading ? <LuLoaderCircle className="animate-spin h-6 w-6 text-white"/> : "Send Message"}
        </button>
          {/* Status Message */}
        {status && <p className="text-center text-sm text-gray-300">{status}</p>}
      </form>
</>
  )
}

export default Contact