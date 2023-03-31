import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import MovieGallery from "./Components/MovieGallery";
import MyFooter from "./Components/MyFooter";
function App() {
  return (
    <>
      <Header />
      <MovieGallery title="Harry Potter" />
      <MovieGallery title="Il Signore degli Anelli" />
      <MovieGallery title="Guardiani della Galassia" />
      <MyFooter />
    </>
  );
}

export default App;
