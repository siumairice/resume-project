import "./App.css";
import ResumeTemplate from "./components/ResumeTemplate";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <LandingPage />
      <Routes> 
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/ResumeTemplate' element ={<ResumeTemplate/>}></Route>
    </Routes>
    </>
  );
}

export default App;
