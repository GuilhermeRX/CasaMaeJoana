import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";

class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Home;
