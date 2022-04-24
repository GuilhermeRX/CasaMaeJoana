import React from "react";
import Bolos from "../Components/Bolos";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import './Catalogo.css';

class Catalogo extends React.Component {
  render() {
    return (
      <div className="page-catalogo">
        <Header />
        <div className="Products">
        <Bolos />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Catalogo;
