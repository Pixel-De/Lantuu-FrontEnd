import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/header";

function App() {
  return (
    // <Router>
    //   <div className="app">
    //     <div className="app--header">
    //       <Link to="/">
    //         <Home />
    //       </Link>
    //       <Link to="/login">
    //         <Login />
    //       </Link>
    //       <Link to="/sign-up">
    //         <SignUp />
    //       </Link>
    //     </div>
    //     <Switch>
    //       <Route exact path="/" component={Home}></Route>
    //       <Route path="/login" component={Home}></Route>
    //       <Route path="/sign-up" component={Home}></Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Router>
      <div className="container">
        <Header />
        <div className="container--content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
        <div className="container--footer">
          <ul>
            <li>
              <span>Холбоо барих хаяаг:</span>
              <span>Лорээмм</span>
            </li>
            <li>
              <span>Мэдээлэл:</span>
              <span>Лорээмм</span>
            </li>
            <li>
              <span>Блаа2:</span>
              <span>Лорээмм</span>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
