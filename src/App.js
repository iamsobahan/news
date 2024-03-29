import './App.css';
import './assets/css/responsive.css';
import Header from './Components/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import { BangladeshMain } from './Components/Bangladesh/BangladeshImport/BangladeshImport';
import Details from './Components/Details/Details';
import { DocumentaryMain } from './Components/Decumentary/DocumentaryImport/DocumentaryImport';
import { JobMain } from './Components/Job/JobImport/JobImport';
import { BcsMain } from './Components/Bcs/BcsImport/BcsImport';
import QuizeResult from './Components/Bcs/Quize/QuizeResult';
import Navigation from './Components/Navigation/Navigation';
import AroNewsAll from './Components/AroNewsAll/AroNewsAll';
import Jogajog from './Components/Jogajog/Jogajog';
import Privacy from './Components/Privacy/Privacy';
import Shomporko from './Components/Shomporko/Shomporko';
import Register from './Components/Auth/Register';
function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:name" element={<BangladeshMain />} />
        <Route path="/documentary" element={<DocumentaryMain />} />
        <Route path="/jobs" element={<JobMain />} />
        <Route path="/bcs" element={<BcsMain />} />
        <Route path="/quize" element={<QuizeResult />} />
        <Route path="/aro-news-all" element={<AroNewsAll />} />
        <Route path="/shomporko" element={<Shomporko />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jogajog" element={<Jogajog />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
