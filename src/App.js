import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Future from "./pages/Future";
import Work from "./pages/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/future" component={Future} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
