import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from './AuthContext'; // Adjust the import path as necessary
import Home from "./pages/USER/home/Home";
import Booking from "./pages/USER/booking/Booking";
import Login from "./pages/USER/login/Login";
import Register from "./pages/USER/register/Register";
import Empty from "./pages/USER/empty/Empty";
import Admin from "./pages/ADMIN/Admin";
import RemoveCar from "./pages/ADMIN/removecar/RemoveCar";
import ContactUs from "./pages/USER/contactus/ContactUs";
import Profile from "./pages/USER/profile/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/empty" element={<Empty/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/removecar" element={<RemoveCar/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
