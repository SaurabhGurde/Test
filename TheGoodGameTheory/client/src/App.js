import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import McqPage from "./components/McqPage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mcqpage/:qid" element={<McqPage/>}></Route>
          <Route path="/resultpage" element={<ResultPage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
