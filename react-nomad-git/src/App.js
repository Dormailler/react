import Home from "./routes/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/hello" element={<h1>안녕하세요</h1>} />
      <Route path="/movie/:id" element={<Detail/>} />
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home/>} />
    </Routes>
  </Router>;
}

export default App;
