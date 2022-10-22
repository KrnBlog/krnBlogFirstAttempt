import "./styles.css";
import HeadBar from "./HeadBar/HeadBar.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import BottomBar from "./BottomBar/BottomBar.jsx";
import Main from "./Main/Main";

export default function App() {
  return (
    <>
      <div className="headDiv">
        <HeadBar />
        <NavBar />
      </div>
      <div className="dispalayArea">
        <Main />
      </div>
      <BottomBar />
    </>
  );
}
