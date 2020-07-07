import React from "react";
import "./App.css";
import FirstPage from "./screens/firstPage";
import SecondPage from "./screens/secondPage";
import ThirdPage from "./screens/thirdPage";
import ContactPage from "./screens/contact";
import NavigationBar from "./screens/navigation";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ContactPage />
    </div>
  );
}

export default App;
