import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import ViewStudent from "./components/ViewStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<AddStudent />} />
        <Route path="/view" element={<ViewStudent />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
      </Routes>
    </div>
  );
}

export default App;