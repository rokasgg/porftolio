import React from "react";
import "./App.scss";
import FirstPage from "./screens/firstPage";
import SecondPage from "./screens/aboutPage/secondPage";
import ThirdPage from "./screens/thirdPage";
import ContactPage from "./screens/contactPage/contact";
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
