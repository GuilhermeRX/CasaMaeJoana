import React from 'react';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import './Footer.css';
export default function Footer() {
  return (
    <footer>
          <div className="endereco">
            <p>Endereço:</p>
            <div>
              <p>Rua Oitenta - 216</p>
              <p>Rústico, Volta Redonda-Rj</p>
            </div>
          </div>

          <div className="telefone">
            <p>Telefone:</p>
            <div>
              <p><FaWhatsappSquare />(24) 99936-2399</p>
            </div>
          </div>

          <div className="contatos">
            <p>Redes Sociais:</p>
            <div>
              <a href='https://www.instagram.com/a_casa_da_mae_joana_doceria/' target='_blank' rel="noreferrer"><AiFillInstagram /></a>
              <a href='https://www.facebook.com/Soniaaa.costa01' target='_blank' rel="noreferrer"><AiFillFacebook /></a>
            </div>
          </div>
        </footer>
  )
}
