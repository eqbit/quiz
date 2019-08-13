import React from 'react';
import './style.css';

const FirstSlide = props => (
  <div className='first-slide'>
    <div className="first-slide__bg">
      <img src="/images/bg.jpg" alt=""/>
    </div>
    
    <div className="container">
      <div className="first-slide-info">
        <div className="first-slide-info-bordered">
          <img src="/images/first-screen-border.png" alt=""/>
      
          <div className="first-slide-info-bordered__bonus">
            скидка <span className='text-primary'>50 000 рублей</span>, входная дверь в подарок <br/>
            и другие бонусы при заказе стоительства дома!
          </div>
          
          <div className="first-slide-info-bordered__hook">
            Ответьте на 5 простых вопросов и получите <span className='text-primary'>проект дома уже сегодня!</span>
          </div>
        </div>
        
        <div className="first-slide-info-btn">
          <div className="btn btn--primary"
               onClick={() => props.setSlide(1)}>
            ответить на вопросы и получить подарок
          </div>
        </div>
      </div>
    </div>
  </div>
);

export {FirstSlide}