import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Slidebar from "./Components/Slidebar";
import Card from "./Components/Card";
import BookingForm from "./Components/BookingForm";
function App() {
//   let [ip, setIp] = useState({});
//   useEffect(()=>{
//     const fetchData = async()=>{
// const data = await fetch("http://localhost:2024/");
// // const data = {"ip":"32165498","let":"let long"}
// const jsonData = await data.json();
// console.log(jsonData);
// setIp(jsonData);
//     }
//     fetchData();
//   },[])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/slidebar" element={<Slidebar/>} />
          <Route path="/card" element={<Card/>} />
          <Route path="/bookingform" element={<BookingForm/>}/>
        </Routes>
      </Router>
    </>
  )
  
}

export default App;
