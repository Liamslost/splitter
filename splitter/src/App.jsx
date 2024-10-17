import "./App.css";
import Container from "./Container";
import HeaderBox from "./HeaderBox";



function App() {
  return (
    <>
      <div className="h-lvh w-100 bg-teal-100 flex flex-col">
        <HeaderBox />
        <Container />
      </div>
    </>
  );
}

export default App;
