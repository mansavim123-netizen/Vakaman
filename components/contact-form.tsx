"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-field"><label htmlFor="full-name">Your name</label><input id="full-name" name="name" autoComplete="name" required placeholder="Full name" /></div>
      <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></div>
      <div className="form-field"><label htmlFor="phone">Phone number <span>(optional)</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" /></div>
      <div className="form-field"><label htmlFor="interest">What would you like to explore?</label><select id="interest" name="interest" defaultValue=""><option value="" disabled>Select an area of interest</option><option>Coimbatore</option><option>Chennai</option><option>The Nilgiris</option><option>Anaikatti</option><option>General enquiry</option></select></div>
      <div className="form-field form-field--full"><label htmlFor="message">A little more about your enquiry <span>(optional)</span></label><textarea id="message" name="message" rows={4} placeholder="Tell us what you have in mind." /></div>
      <button className="button button--light enquiry-submit" type="submit">Review enquiry <span aria-hidden="true">↗</span></button>
      {submitted ? <p className="form-status" role="status">This is a wireframe only. No enquiry has been sent; connect the approved email and WhatsApp endpoints before launch.</p> : <p className="form-note">Your information should be handled privately and only for this enquiry. Submission is not connected yet.</p>}
    </form>
  );
}
