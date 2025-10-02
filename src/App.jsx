import "./App.css";
import AlertComponent from "./components/AlertComponent";
import BookList from "./components/AllTheBooks";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import TopBar from "./components/TopBar";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <TopBar brandName="Book-World" />
      {/*<SingleBook book={fantasy[10]} /> */}
      <AlertComponent />
      {/*<AllTheBooks /> */}
      <BookList book={fantasy} />
    </>
  );
}

export default App;
