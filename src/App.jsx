import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layouts/BaseLayout";
import Home from "./pages/Home";
import MoviesPage from "./pages/Movies/Movies";
import NotFound from "./pages/NotFound";
import MovieDetailsPage from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies">
              <Route path="" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
