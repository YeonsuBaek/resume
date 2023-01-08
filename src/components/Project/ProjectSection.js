import ProjectHeader from "./ProjectHeader";
import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <div className="flex flex-wrap">
      <ProjectHeader />
      <ProjectList />
    </div>
  );
};

export default ProjectSection;
