import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        eyebrow="03 / Selected work"
        title="Projects at the intersection."
        titleId="projects-title"
        description="A selection spanning software, circuits, embedded systems, networking, and research. Project specifics are being reviewed so each entry reflects the work accurately."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
