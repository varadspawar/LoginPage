import { Routes, Route } from "react-router-dom"; 
import Signup from "./Component/Signup/"; 

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />  
    </Routes>
  );
}

export default App;
