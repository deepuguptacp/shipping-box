import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddBox from "./pages/AddBox";
import ViewBoxList from "./pages/ViewBoxList";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<AddBox />} />
            <Route path="/list" element={<ViewBoxList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
