import './App.css';
import Header from './Components/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Home/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Bangladesh from './Components/Bangladesh/Bangladesh/Bangladesh';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bangladesh" element={<Bangladesh />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
