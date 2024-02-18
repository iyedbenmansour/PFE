import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/USER/home/Home";
import Booking from "./pages/USER/booking/Booking";
import Login from "./pages/USER/login/Login";
import Register from "./pages/USER/register/Register";
import Empty from "./pages/USER/empty/Empty";
import Admin from "./pages/ADMIN/Admin";
import RemoveCar from "./pages/ADMIN/removecar/RemoveCar";
import ContactUs from "./pages/USER/contactus/ContactUs";
function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
