import { type FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'
import { emailPublicKey, emailServiceId, emailTemplateId } from './env-variable'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

function socialIcon(label: string) {
  const key = label.toLowerCase()
  if (key.includes('github')) return <FaGithub />
  if (key.includes('linkedin')) return <FaLinkedinIn />
  return <FaXTwitter />
}

function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)
  const { data } = usePortfolioContent()
  const { site } = data

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.current) return

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setStatus('The contact form is not configured yet. Please use the email link instead.')
      return
    }

    setIsSending(true)
    setStatus('')
    try {
      await emailjs.sendForm(emailServiceId, emailTemplateId, form.current, { publicKey: emailPublicKey })
      form.current.reset()
      setStatus('Message sent — I’ll get back to you soon.')
    } catch {
      setStatus('Something went wrong. Please email me directly instead.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact section page-width" id="contact" aria-labelledby="contact-title">
      <div className="section-label"><span>06</span><span>Contact</span></div>
      <div className="contact-grid">
        <div className="contact-intro">
          <h2 id="contact-title">Get in touch</h2>
          <p>
            I'm open to opportunities in web and mobile development. If you're working on something interesting or have a project in mind, feel free to reach out.
          </p>
          <a className="email-link" href={`mailto:${site.email}`}>{site.email} <FiArrowUpRight /></a>
          <div className="social-links" aria-label="Social profiles">
            {site.socialLinks.map((social) => <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} key={social.label}>{socialIcon(social.label)}</a>)}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Your name<input required name="name" type="text" placeholder="Your name" /></label>
          <label>Email address<input required name="email" type="email" placeholder="your@email.com" /></label>
          <label>Message<textarea required name="message" rows={5} placeholder="Tell me about your project or opportunity..." /></label>
          <button type="submit" className="button button-primary" disabled={isSending}>{isSending ? 'Sending...' : 'Send message'} <FiArrowUpRight /></button>
          {status && <p className="form-status" aria-live="polite">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
