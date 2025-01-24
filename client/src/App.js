import { Routes, Route } from "react-router-dom"; 
import Signup from "./Component/Signup/"; 
import Login from "./Component/Login/";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />  
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
      <Signup></Signup>
    </div>
  );
}

export default App;
