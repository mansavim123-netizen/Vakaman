import Link from "next/link";
import ArchitectureField from "@/components/architecture-field";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow"><span className="status-dot" /> VAKAMAN DEVELOPERS <span className="eyebrow__divider">/</span> SOUTH INDIA</p>
          <h1 id="hero-title">Built for a<br /><em>longer</em> horizon.</h1>
          <p className="hero__description">A considered portfolio of places, proportion and permanence. Discover architecture made to belong to its setting—and to time.</p>
          <div className="hero__actions">
            <Link className="button button--light" href="/projects">Explore the portfolio <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about">Our perspective <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero__visual">
          <ArchitectureField />
          <div className="hero__visual-foot"><span>FORM STUDY / 001</span><span>MATTER, HELD IN LIGHT</span></div>
        </div>
        <div className="hero__bottom">
          <span className="hero__bottom-note">THOUGHTFULLY CONSIDERED<br />FROM THE GROUND UP</span>
          <a className="scroll-cue" href="#perspective"><span className="scroll-cue__line" /> SCROLL TO DISCOVER</a>
          <span className="hero__bottom-index">COIMBATORE · CHENNAI<br />NILGIRIS · ANAIKATTI</span>
        </div>
      </section>

      <section className="manifesto-section section-pad" id="perspective">
        <div className="shell manifesto-grid">
          <div className="manifesto-index"><span className="eyebrow">01 / A POINT OF VIEW</span><span className="manifesto-index__rule" /></div>
          <div className="manifesto-copy">
            <SectionHeading eyebrow="Architecture, considered" title={<>Less about the moment.<br /><em>More about what remains.</em></>} />
            <p className="manifesto-copy__body">We believe the built environment deserves the same care as the lives unfolding within it. Proportion, material, context and the quiet confidence of a decision made well—these are the things worth returning to.</p>
            <Link className="text-link" href="/about">Discover our perspective <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="portfolio-section section-pad">
        <div className="shell">
          <div className="section-row">
            <SectionHeading eyebrow="02 / The portfolio" title={<>Places with<br /><em>a point of view.</em></>} description="Explore the Vakaman portfolio across distinct landscapes and cities." />
            <Link className="text-link section-row__link" href="/projects">View all projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="featured-projects">
            {[projects[0], projects[5], projects[9]].map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section className="geography-section section-pad">
        <div className="geography-section__field" aria-hidden="true"><div className="geography-section__contour" /><div className="geography-section__axis" /></div>
        <div className="shell geography-grid">
          <div><span className="eyebrow">03 / A sense of place</span><h2>Rooted in place.<br /><em>Open to possibility.</em></h2></div>
          <div className="geography-copy">
            <p>Four distinct settings. Different rhythms, climates and ways of living. Each deserves its own architectural response.</p>
            <div className="place-list">
              {["Coimbatore", "Chennai", "The Nilgiris", "Anaikatti"].map((place, index) => <div className="place-list__item" key={place}><span>{String(index + 1).padStart(2, "0")}</span><span>{place}</span><span aria-hidden="true">↗</span></div>)}
            </div>
            <Link className="text-link" href="/projects">Explore by location <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="legacy-section section-pad">
        <div className="shell legacy-composition">
          <div className="legacy-art" aria-hidden="true"><div className="legacy-art__frame"><div className="legacy-art__plane" /><div className="legacy-art__light" /></div><span className="legacy-art__caption">TIME / CRAFT / CONTINUITY</span></div>
          <div className="legacy-copy">
            <span className="eyebrow">04 / The longer view</span>
            <h2>What we make<br />should <em>outlast us.</em></h2>
            <p>A body of work is more than a list of addresses. It is a record of decisions, of standards held, and of places that become part of people’s lives.</p>
            <Link className="button button--outline" href="/legacy">Explore the legacy <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="shell">
          <div className="section-row section-row--approach">
            <SectionHeading eyebrow="05 / The approach" title={<>Quiet decisions.<br /><em>Lasting presence.</em></>} description="The character of a place emerges from the details that are easy to overlook—and difficult to get right." />
            <Link className="text-link section-row__link" href="/about">Read our approach <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="principle-grid">
            <article className="principle-card"><span className="principle-card__index">I</span><div className="principle-card__line" /><h3>Proportion</h3><p>A sense of order that feels natural, not imposed.</p></article>
            <article className="principle-card"><span className="principle-card__index">II</span><div className="principle-card__line" /><h3>Material</h3><p>Surfaces, light and texture considered as one.</p></article>
            <article className="principle-card"><span className="principle-card__index">III</span><div className="principle-card__line" /><h3>Context</h3><p>Buildings that respond to the places they inhabit.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-band section-pad">
        <div className="shell contact-band__inner">
          <span className="eyebrow">06 / Begin a conversation</span>
          <h2>Some decisions<br />deserve <em>a conversation.</em></h2>
          <div className="contact-band__bottom"><p>Tell us what you are looking for. We will take it from there.</p><Link className="button button--light" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
