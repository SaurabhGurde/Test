import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
