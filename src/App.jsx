import "./App.css";
import AlertComponent from "./components/AlertComponent";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar brandName="Book-World" />
      <AlertComponent />
      <AllTheBooks />
    </>
  );
}

export default App;
