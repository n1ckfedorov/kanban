import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Todo } from "./components";

function App() {
  return (
    <>
      <Todo />
      <ToastContainer />
    </>
  );
}

export default App;
