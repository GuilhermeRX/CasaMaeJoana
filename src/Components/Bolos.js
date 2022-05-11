import React, { Component } from 'react';
import bolo1 from '../images/bolos/bolo1.jpg';
import bolo10 from '../images/bolos/bolo10.jpg';
import bolo12 from '../images/bolos/bolo12.jpg';
import bolo13 from '../images/bolos/bolo13.jpg';
import bolo14 from '../images/bolos/bolo14.jpg';
import bolo20 from '../images/bolos/bolo20.jpeg';
import bolo22 from '../images/bolos/bolo22.jpeg';
import bolo23 from '../images/bolos/bolo23.jpeg';
import bolo24 from '../images/bolos/bolo24.jpeg';
import bolo4 from '../images/bolos/bolo4.jpg';
import bolo5 from '../images/bolos/bolo5.jpg';
import bolo6 from '../images/bolos/bolo6.jpg';
import bolo7 from '../images/bolos/bolo7.jpg';
import bolo8 from '../images/bolos/bolo8.jpg';
import bolo9 from '../images/bolos/bolo9.jpg';
import docinho2 from '../images/docinhos/docinho2.jpeg';
import docinho3 from '../images/docinhos/docinho3.jpeg';
import docinho4 from '../images/docinhos/docinho4.jpeg';
import docinho6 from '../images/docinhos/docinho6.jpeg';
import docinho7 from '../images/docinhos/docinho7.jpeg';
import docinho8 from '../images/docinhos/docinho8.jpeg';
import docinho9 from '../images/docinhos/docinho9.jpeg';
import './Bolos.css';


 class Bolos extends Component {
  render() {
    const items = [bolo1, bolo4, bolo5, bolo6, bolo7, bolo8, bolo9, bolo10, bolo12, bolo13, bolo14, bolo20, bolo22, bolo23, bolo24]
    const docinhos = [docinho2, docinho3, docinho4, docinho6, docinho7, docinho8, docinho9]
    return (
      <div className='container'>
        <div className='container-precos'>
          <h2 className='title-preco'>Tabela de Preços</h2>
          <div className='div-all-products'>
            <div>
              <h4 className='subtitle-preco'>Bolos</h4>
              <p className='text-preco'>10 fatias - R$ 70.</p>
              <p className='text-preco'>20 fatias - R$ 130.</p>
              <p className='text-preco'>30 fatias- R$ 180.</p>
              <p className='text-preco'>50 Fatias- R$ 240.</p>
              <p className='text-preco'>2 Recheios de sua escolha.</p>
              <p className='text-preco'>Massas: Branca e Preta.</p>
            </div>

            <div>
              <h4 className='subtitle-preco'>Tortas</h4>
              <p className='text-preco'>Maçã R$ 78,00.</p>
              <p className='text-preco'>Chesscake R$ 98.</p>
              <p className='text-preco'>Banana R$ 86.</p>
              <p className='text-preco'>Castanha R$ 86.</p>
            </div>

            <div>
              <h4 className='subtitle-preco'>Docinhos</h4>
              <p className='text-preco'>Cajuzinho R$ 85 - 100un.</p>
              <p className='text-preco'>Beijinho R$ 85 - 100un.</p>
              <p className='text-preco'>Brigadeiro R$ 95 - 100un.</p>
            </div>

            <div>
              <h4 className='subtitle-preco'>Sorvetes</h4>
              <p className='text-preco'>Potes de 300ml R$ 8,00</p>
              <p className='text-preco'>Potes de 500ml R$ 15,00</p>
              <p className='text-preco'>Potes de 1Lt R$ 18,00</p>
            </div>


            
          </div>
          
        </div>
        
        <div className='div-bolos'>
          <div className='div-title-product'>
            <h1 className='title-bolo'>Bolos e Tortas</h1>
          </div>
          <div className='bolos-container'>
            {items.map((item, index) => (
              <div key={index} className='card-product'>
                <img src={item} alt='bolos' className='img-product'/>
                <a className='link-buy' href='https://wa.me/5524999362399?text=Ol%C3%A1+eu+gostaria+de+encomendar+meu+pedido+%3B%29'  target='_blank' rel="noreferrer">Comprar Agora</a>
              </div>
            ))}
          </div>
        </div>

        <div className='div-bolos'>
          <div className='div-title-product'>
            <h1 className='title-bolo'>Docinhos</h1>
          </div>
          <div className='bolos-container'>
            {docinhos.map((item, index) => (
              <div key={index} className='card-product'>
                <img src={item} alt='Docinhos' className='img-product'/>
                <a href='https://wa.me/5524999362399?text=Ol%C3%A1+eu+gostaria+de+encomendar+meu+pedido+%3B%29' className='link-buy' target='_blank' rel="noreferrer">Comprar Agora</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Bolos;
