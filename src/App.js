import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navb from "./Components/Navb";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/AddMovie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
