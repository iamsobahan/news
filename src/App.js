import './App.css';
import Header from './Components/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import { BangladeshMain } from './Components/Bangladesh/BangladeshImport/BangladeshImport';
import Details from './Components/Details/Details';
import { DocumentaryMain } from './Components/Decumentary/DocumentaryImport/DocumentaryImport';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/banglades" element={<BangladeshMain />} />
        <Route path="/documentary" element={<DocumentaryMain />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
