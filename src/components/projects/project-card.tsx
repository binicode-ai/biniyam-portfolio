import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__topline">
        <span className="project-card__index">PROJECT / {String(index + 1).padStart(2, "0")}</span>
        {project.status === "research" ? (
          <span className="project-card__status">Research</span>
        ) : null}
      </div>
      <p className="project-card__category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-card__summary">{project.summary}</p>

      <details className="project-card__details">
        <summary>Project details</summary>
        <div className="project-card__review">
          {project.highlights ? (
            <>
              <p>Confirmed functionality</p>
              <ul>
                {project.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </>
          ) : null}
          {project.technologies ? (
            <>
              <p>Verified technologies</p>
              <ul className="project-card__technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </>
          ) : null}
          {project.verificationNote ? (
            <p className="project-card__verification">{project.verificationNote}</p>
          ) : null}
          <p>Still to confirm</p>
          <ul>
            {project.reviewItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </details>
      {project.repositoryUrl ? (
        <a
          className="project-card__repository"
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} repository on GitHub (opens in a new tab)`}
        >
          View GitHub repository <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </article>
  );
}
