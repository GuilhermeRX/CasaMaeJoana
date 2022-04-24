import React from "react";
import { GiCakeSlice } from "react-icons/gi";
import { Link } from "react-router-dom";
import './Main.css';
import MyCarousel from "./MyCarousel";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <h1 className="title-home">Casa Da Mãe Joana Doceria <GiCakeSlice /></h1>
        <h2 className="subtitle-home">Delicias caseiras personalizadas</h2>

        <div className="destac">
          <div className="mycarousel">
          <MyCarousel />
          </div>
        </div>

        <p className="text-home">A Casa Da Mãe Joana, dedica-se à produção de tortas, bolos , cupcakes, geladinhos gourmet e sorvetes.. Tudo 100% caseiro e personalizável.
        Utilizamos receitas tradicionais e os ingredientes da melhor qualidade, para garantir que as nossas doçuras impressione o seu paladar !</p>

        <Link to='/catalogo' className="link-home">Catálogo de Produtos</Link>
      </main>
    )
  }
}

export default Main;