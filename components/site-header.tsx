"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Portfolio" },
  { href: "/about", label: "Our perspective" },
  { href: "/legacy", label: "Legacy" },
  { href: "/virtual-tours", label: "Virtual tours" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="wordmark" href="/" aria-label="Vakaman Developers home" onClick={() => setOpen(false)}>
          <span className="wordmark__name">VAKAMAN</span>
          <span className="wordmark__descriptor">DEVELOPERS</span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={open ? "primary-nav primary-nav--open" : "primary-nav"} aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link className="nav-enquire" href="/contact" onClick={() => setOpen(false)}>Begin a conversation <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
