import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import EstabStep from "./EstabStep";
import FlatStep from "./FlatStep";
import PlotStep from "./PlotStep";
import PropertyWizard from "./PropertyWizard";
import PropertyWizardEnhanced from "./PropertyWizardEnhanced";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PropertyWizard />} />
        {/* <Route exact path="/" element={<PropertyWizardEnhanced />} /> */}
        <Route exact path="/flatstep" element={<FlatStep />} />
        <Route exact path="/plotstep" element={<PlotStep />} />
        <Route exact path="/estabstep" element={<EstabStep />} />
      </Routes>
    </Router>
  );
}

export default App;
