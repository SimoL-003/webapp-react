import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layouts/BaseLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
