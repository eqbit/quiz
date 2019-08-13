import React from 'react';
import './style.css';

const Advantages = () => (
  <div className='advantages'>
    <div className="advantages__title">
      наши <br/>
      достижения
    </div>

    <div className="advantages-item">
      <div className="advantages-item__top">520 +</div>
      <div className="advantages-item__bottom">Построенных объектов</div>
    </div>

    <div className="advantages-separator"/>

    <div className="advantages-item">
      <div className="advantages-item__top">246 +</div>
      <div className="advantages-item__bottom">Разработанных проектов</div>
    </div>

    <div className="advantages-separator"/>

    <div className="advantages-item">
      <div className="advantages-item__top">12</div>
      <div className="advantages-item__bottom">Лет надежной работы</div>
    </div>
  </div>
);

export {Advantages}