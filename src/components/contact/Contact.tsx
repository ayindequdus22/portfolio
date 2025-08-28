import React, { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { emailPublicKey, emailServiceId, emailTemplateId } from "./env-variable";

const Contact = (): React.JSX.Element => {
  console.log({ emailPublicKey, emailServiceId, emailTemplateId })
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
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
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


      <form ref={form} onSubmit={sendEmail} className="mt-20 space-y-2">
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
          <label className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            required type="email"
            name="email"

            placeholder="john.doe@example.com"
            className="w-full rounded-lg bg-[#26262A] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message here"
            rows={4}
            className="w-full rounded-lg bg-[#26262A] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#3A3A3F] hover:bg-[#4a4a52] text-white font-medium py-3 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact