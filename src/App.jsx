import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="justify-items-center items-center mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
