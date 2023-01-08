const ProjectItem = (props) => {
  return (
    <div className="mb-9 border-b border-border">
      <div className="flex items-end mb-2">
        <h3 className="mr-2 text-primary text-header-3 font-bold">{props.title}</h3>
        <span className="text-secondary text-body-sm leading-6">{props.date}</span>
      </div>
      <p className="mb-5 text-primary">{props.description}</p>
      <h4 className="mb-1 text-primary text-header-4 font-bold">Details</h4>
      <ul className="mb-5 ml-6">
        {props.details.map((detail) => {
          return <li className="list-disc text-primary text-body-md">{detail}</li>;
        })}
      </ul>
      <h4 className="mb-1 text-primary text-header-4 font-bold">Tech Stacks</h4>
      <p className="mb-6 text-primary text-body-md">
        {props.techStacks.map((tech, index) => {
          return index === props.techStacks.length - 1 ? tech : `${tech}, `;
        })}
      </p>
      <div className="flex mb-9">
        <a
          href={props.links.demo}
          className="w-3/6 text-primary text-body-md underline after:content-['↗'] after:no-underline"
        >
          데모 보러가기
        </a>
        <a
          href={props.links.demo}
          className="w-3/6 text-primary text-body-md underline  after:content-['↗'] after:no-underline"
        >
          깃허브 보러가기
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
