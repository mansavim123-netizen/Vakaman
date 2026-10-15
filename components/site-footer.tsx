import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <Link className="wordmark wordmark--footer" href="/" aria-label="Vakaman Developers home">
              <span className="wordmark__name">VAKAMAN</span><span className="wordmark__descriptor">DEVELOPERS</span>
            </Link>
            <p className="footer-note">A considered approach to the built world.</p>
          </div>
          <div className="footer-links">
            <div><span className="eyebrow">Explore</span><Link href="/projects">Portfolio</Link><Link href="/legacy">Legacy</Link><Link href="/virtual-tours">Virtual tours</Link></div>
            <div><span className="eyebrow">Connect</span><Link href="/about">Our perspective</Link><Link href="/press">Press</Link><Link href="/contact">Contact</Link></div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Vakaman Developers</span>
          <span>Coimbatore · Chennai · The Nilgiris · Anaikatti</span>
          <a href="#main-content">Back to the beginning ↑</a>
        </div>
      </div>
    </footer>
  );
}
