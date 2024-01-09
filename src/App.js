import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from './components/Landingpage/Landingpage.jsx';
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
    </Routes>
  </Router>
);
export default App;
