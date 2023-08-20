import "./App.css";
import Experience from "./components/Experience";
import LandingPage from "./components/LandingPage";
import SkillButtons from "./components/SkillButtons";
import Project from "./components/Project";
import ResumeTemplate from "./components/ResumeTemplate";
import NewSkill from "./components/NewSkill";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

/*
function App() {
  return (
    <>
      <Project
        title="jkfda"
        location="waterloo"
        languages={["javascript", "css", "gdgsahdh"]}
        description={["wrote stuff", "did a lot of work"]}
        tags={["hmmm", "ggggg"]}
      />
    </>
  );
}
*/

export default App;
