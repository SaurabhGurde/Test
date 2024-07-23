import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainPage from "./MainPage";
import AdminLogin from './AdminPages/AdminLogin';
import CreateUser from './AdminPages/CreateUser';
import UserData from './AdminPages/UserData'

import UserLogin from "./UserPages/UserLogin";
import UserDetails from './UserPages/UserDetails';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        {/*------------------- Admin Routes ------------------------------*/}
        <Route exact path="/adminlogin" element={<AdminLogin/>} />
        <Route exact path="/createuser" element={<CreateUser/>} />
        <Route exact path="/userdata/:userid1/:userid2" element={<UserData/>} />
        {/*-------------------- UserRoutes -------------------------------*/}
        <Route exact path="/userlogin" element={<UserLogin/>} />
        <Route exact path="/userdetails/:UserID" element={<UserDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
