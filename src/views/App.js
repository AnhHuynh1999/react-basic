import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import { Route, Switch } from "react-router-dom";
import Home from "./Example/Home";
import About from "./Example/About";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/todo" component={ListTodo}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
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
