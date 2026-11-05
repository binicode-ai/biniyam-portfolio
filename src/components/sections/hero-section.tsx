const specialties = [
  "Software Engineering",
  "PCB Design",
  "Embedded Systems",
  "Robotics",
  "IoT",
];

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow">
          <span className="eyebrow__line" aria-hidden="true" />
          Computer Engineering · Software &amp; Hardware
        </p>
        <h1 className="hero__title" id="hero-title">
          Biniyam
          <br />
          <span>Samuel Yaya</span>
        </h1>
        <p className="hero__role">Computer Engineer <span aria-hidden="true">|</span> Full-Stack Developer</p>
        <p className="hero__intro">
          Building across software and hardware, from full-stack applications to
          connected embedded systems.
        </p>

        <ul className="hero__specialties" id="engineering-focus" aria-label="Areas of focus">
          {specialties.map((specialty) => (
            <li className="specialty" key={specialty}>
              {specialty}
            </li>
          ))}
        </ul>

        <div className="hero__actions">
          <a className="button button--primary" href="#engineering-focus">
            Explore my focus <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--quiet" href="#site-navigation">
            Browse navigation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero__diagram" aria-hidden="true">
        <div className="diagram__ring diagram__ring--outer" />
        <div className="diagram__ring diagram__ring--inner" />
        <div className="diagram__axis diagram__axis--horizontal" />
        <div className="diagram__axis diagram__axis--vertical" />
        <span className="diagram__node diagram__node--top" />
        <span className="diagram__node diagram__node--right" />
        <span className="diagram__node diagram__node--bottom" />
        <span className="diagram__center">CE</span>
        <span className="diagram__caption">SYSTEMS / 001</span>
      </div>

      <div className="hero__index" aria-hidden="true">
        <span>01</span>
        <span className="hero__index-rule" />
        <span>ENGINEERING</span>
      </div>
    </section>
  );
}
