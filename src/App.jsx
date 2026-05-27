import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Agance from "./pages/Agance";
import Projects from "./pages/Projects";


function App() {



  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agance" element={<Agance />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
export default App;
