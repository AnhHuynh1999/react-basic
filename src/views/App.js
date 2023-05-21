import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Example/Home";
import About from "./Example/About";
import ListUser from "./Users/ListUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/todo" element={<ListTodo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user" element={<ListUser />}></Route>
        </Routes>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
