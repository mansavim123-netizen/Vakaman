import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Begin a conversation / 05" title={<>The first step<br /><em>is a conversation.</em></>} description="Tell us a little about what you are looking for. The Vakaman team can take the conversation from there." />
      <section className="shell contact-layout">
        <aside className="contact-layout__aside"><span className="eyebrow">For enquiries</span><h2>Thoughtful questions<br />are always welcome.</h2><p>Share your area of interest and the best way to reach you. Official contact details will be added after client confirmation.</p><div className="contact-detail"><span className="eyebrow">Locations</span><p>Coimbatore · Chennai<br />The Nilgiris · Anaikatti</p></div></aside>
        <div className="contact-layout__form"><span className="eyebrow">Enquiry form</span><ContactForm /></div>
      </section>
    </>
  );
}
