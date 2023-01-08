import IntroductionHeader from "./components/Introduction/IntroductionHeader";
import IntroductionDescription from "./components/Introduction/IntroductionDescription";

function App() {
  return (
    <div className="w-full px-sm-container mx-auto">
      <div className="flex flex-wrap">
        <IntroductionHeader />
        <IntroductionDescription />
      </div>
    </div>
  );
}

export default App;
