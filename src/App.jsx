import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Slidebar from "./Components/Slidebar";
import Card from "./Components/Card";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/slidebar" element={<Slidebar/>} />
          <Route path="/card" element={<Card/>} />
        </Routes>
      </Router>
    </>
  )
  
}

export default App;
