import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function ProjectList() {
  return (
    <section className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}

export default ProjectList;