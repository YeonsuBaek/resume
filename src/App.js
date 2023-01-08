import IntroductionSection from "./components/Introduction/IntroductionSection";
import ProjectSection from "./components/Project/ProjectSection";

function App() {
  return (
    <div className="w-full px-sm-container mx-auto">
      <IntroductionSection />
      <ProjectSection />
    </div>
  );
}

export default App;
