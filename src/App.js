import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from './components/Landingpage/Landingpage.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
import Contactus from './components/Contactus/Contactus.jsx';
import Privacypolicy from './components/Privacypolicy/Privacypolicy.jsx';
import Termandcondition from './components/Termandcondition/Termandcondition.jsx';
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/privacypolicy" element={<Privacypolicy/>} />
      <Route path="/termandcondition" element={<Termandcondition/>} />
    </Routes>
  </Router>
);
export default App;
