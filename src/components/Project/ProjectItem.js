const ProjectItem = () => {
  return (
    <div className="mb-9 border-b border-border">
      <div className="flex items-end mb-2">
        <h3 className="mr-2 text-primary text-header-3 font-bold">지금 한신은</h3>
        <span className="text-secondary text-body-sm leading-6">2022.07-2022.11</span>
      </div>
      <p className="mb-5 text-primary">
        대락
        이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러이러
        이런 일을 했습니다.
      </p>

      <h4 className="mb-1 text-primary text-header-4 font-bold">Details</h4>
      <ul className="mb-5 ml-6">
        <li className="list-disc text-primary text-body-md">디자인</li>
        <li className="list-disc text-primary text-body-md">어쩌구</li>
        <li className="list-disc text-primary text-body-md">저쩌구</li>
      </ul>

      <h4 className="mb-1 text-primary text-header-4 font-bold">Tech Stacks</h4>
      <p className="mb-6 text-primary text-body-md">Vue.js, Sass</p>

      <div className="flex mb-9">
        <a href="/" className="w-3/6 text-primary text-body-md underline after:content-['↗'] after:no-underline">
          데모 보러가기
        </a>
        <a href="/" className="w-3/6 text-primary text-body-md underline  after:content-['↗'] after:no-underline">
          깃허브 보러가기
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
