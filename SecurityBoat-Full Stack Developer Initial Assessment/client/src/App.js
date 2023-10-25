import AdminLogin from "./screens/admin/AdminLogin";
import Main from "./screens/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignup from "./screens/UserSignup";
import UserLogin from "./screens/UserLogin";
import AdminPage from "./screens/admin/AdminPage";
import UserPage from "./screens/user/UserPage";

function App() {
 


  return (
    <Router>
          <Routes>
          <Route exact path="/" element={<Main/>} /> 
          <Route exact path="/adminlogin" element={<AdminLogin/>} />
          <Route exact path="/usersignup" element={<UserSignup/>} />
          <Route exact path="/userlogin" element={<UserLogin/>} />   
          <Route exact path="/adminpage" element={<AdminPage/>} />  
          <Route exact path="/userpage" element={<UserPage/>} />    

          </Routes>
    </Router>
  );
}

export default App;
