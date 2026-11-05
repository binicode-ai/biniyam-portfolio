const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#engineering-focus", label: "Engineering focus" },
];

export function SiteHeader() {
  return (
    <header className="site-header" id="site-navigation">
      <div className="site-header__inner">
        <a className="brand" href="#home" aria-label="Biniyam Samuel Yaya, home">
          <span className="brand__mark" aria-hidden="true">
            BY
          </span>
          <span className="brand__name">Biniyam Samuel Yaya</span>
        </a>
        <nav className="primary-navigation" aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <a className="primary-navigation__link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
