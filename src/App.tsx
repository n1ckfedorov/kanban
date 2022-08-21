import { ToastContainer } from "react-toastify";
import { Todo } from "./components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Todo />
      <ToastContainer />
    </>
  );
}

export default App;
