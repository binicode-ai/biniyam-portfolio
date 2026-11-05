import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="02 / Areas of focus"
        title="A connected engineering toolkit."
        titleId="skills-title"
        description="Current professional focus and areas of interest, grouped across software and hardware. Specific tools and technologies can be added after review."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.category}>
            <p className="skill-card__index">0{index + 1}</p>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span className="skill-card__context">
                    {item.context === "professional-focus" ? "Professional focus" : "Interest"}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
