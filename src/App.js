import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";


const App = () => (
  <Router>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
  </Router>
);

export default App;