import IntroductionHeader from "./IntroductionHeader";
import IntroductionDescription from "./IntroductionDescription";

const IntroductionSection = () => {
  return (
    <div className="flex flex-wrap">
      <IntroductionHeader />
      <IntroductionDescription />
    </div>
  );
};

export default IntroductionSection;
