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
      <MovieGallery title="Lord of the Rings" />
      <MovieGallery title="Guardians of the Galaxy" />
      <MyFooter />
    </>
  );
}

export default App;
