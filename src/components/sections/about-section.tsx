import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-layout">
        <SectionHeading eyebrow="01 / About" title="Software and hardware, in conversation." titleId="about-title" />
        <div className="about-section__copy">
          <p>{profile.about}</p>
          <p className="about-section__note">
            Electrical and Computer Engineering · Computer Engineering specialization
          </p>
        </div>
      </div>
    </section>
  );
}
