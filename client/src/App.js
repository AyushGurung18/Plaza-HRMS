import React from "react";
import Home from "./component/home";
import Login from "./component/login";
import Services from "./component/services";
import Banner from "./component/banner";
import Features from "./component/features";
import Footer from "./component/footer";

function App() {
  return (
    <div>
      <Home />
      <Login />
      <Services/>
      <Banner/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
