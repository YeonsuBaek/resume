import ProjectItem from "./ProjectItem";

import project from "../../data/project";

const ProjectList = () => {
  return (
    <div>
      {project.map((item) => {
        return (
          <ProjectItem
            title={item.title}
            description={item.description}
            date={item.date}
            details={item.details}
            techStacks={item.techStacks}
            links={item.links}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
