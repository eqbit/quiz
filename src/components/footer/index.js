import React from 'react';
import './style.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-row">
        <a href="https://karsikko-dom.ru" target='_blank' className="footer-row-link">
          © 2019 Тюменский домостроительный завод
        </a>
    
        <a href="https://karsikko-dom.ru/info/processing/" className="footer-row-link" target='_blank'>Политика конфиденциальности</a>
    
        <a href="mailto:dom.karsikko@yandex.ru" className="footer-row-link">dom.karsikko@yandex.ru</a>
    
        <div className="footer-row-socials">
          <a href='https://vk.com/karsikko_dom' className="footer-row-socials__item">
            <img src="/images/vk.png" alt=""/>
          </a>
          <a href='https://www.facebook.com/karsikko.dom/' className="footer-row-socials__item">
            <img src="/images/facebook.png" alt=""/>
          </a>
          <a href='https://www.instagram.com/karsikko_dom/' className="footer-row-socials__item">
            <img src="/images/instagram.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export {Footer}