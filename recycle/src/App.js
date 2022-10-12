import "./App.css";
import Searchbar from "./components/Searchbar";
import Header from "./pages/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Searchbar />
    </div>
  );
}

export default App;
