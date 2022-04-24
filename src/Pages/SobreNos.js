import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import about from '../images/about.svg';
import './SobreNos.css';

export default function SobreNos() {
  return (
    <div className='page-sobre'>
      <Header/>
      <h1 className='title-sobre'>Sobre Nós</h1>
      <main className='main-sobre'>

        <div>
          <img src={about} alt='about' className='img-about'/>
          <span>
            <p className='text-sobre'>
              A casa da mãe Joana,
              nasceu da vontade de reviver os sabores genuíno dos doces caseirinhos tradicionais que marcam nossa memória sabe..?
              o bolinho de chuva , o pavê de bolacha, o pudim de leite, queijo ou laranja.. as compotas e as tradicionais receitas de bolos do lanche da tarde " que lembram nossas Avós na beira do fogão .. o avental.. o arrastar de chinelos.. o cheiro de nossa Avó que nunca se perde!
              Receitas que levam tempo e manuseio no preparo que vão na contramão das receitas atuais de Fast- food..
              Receitas guardadas a Sete chaves que agora vcs terão a oportunidade de provar
            </p>
            <h4 className='subtitle-sobre'> Sabor e Memória DE CASA, DE FAMILIA, DE AMOR E AFETO.</h4>
          </span>
        </div>

      </main>
      <Footer/>

    </div>
  )
}
