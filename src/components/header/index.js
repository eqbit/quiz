import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-row">
          <div className="header-row-address">
            <a href="tel:+7 (3452) 53-80-80" className="header-row-address__phone">
              +7 (3452) 53-80-80
            </a>
      
            <div className="header-row-address__address">
              г.Тюмень ул.Бабарынка 1 корп. 1 стр.1
            </div>
          </div>
    
          <a href="https://karsikko-dom.ru" className="header-row-logo" target='_blank'>
            <img src="/images/logo.png" alt=""/>
          </a>
    
          <div className="header-row-address">
            <a href="tel:+7 (3467) 22-31-22" className="header-row-address__phone">
              +7 (3467) 22-31-22
            </a>
      
            <div className="header-row-address__address">
              г.Ханты-Мансийск, ул.Объездная, 39
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export {Header}