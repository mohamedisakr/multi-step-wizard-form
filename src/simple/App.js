import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Result } from "./Result";
import "../App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Step1 />} />
        <Route exact path="/step2" element={<Step2 />} />
        <Route exact path="/step3" element={<Step3 />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
