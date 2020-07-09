import React from "react";
import "./App.css";
import FirstPage from "./screens/firstPage";
import SecondPage from "./screens/secondPage";
import ThirdPage from "./screens/thirdPage";
import ContactPage from "./screens/contact";
import NavigationBar from "./screens/navigation";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Switch>
          <Route path="/" exact>
            <FirstPage />
          </Route>

          <Route path="/about">
            <SecondPage />
          </Route>

          <Route path="/skills">
            <ThirdPage />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
