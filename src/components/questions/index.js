import React from 'react';
import './style.css';
import InputMask from 'react-input-mask';

const Questions = props => (
  <div className='questions'>
    <div className="questions__title">
      {
        props.done &&
          <>
            <span className="text-primary">поздравляем!</span> Выберите подарок!
          </>
      }
      {
        !props.done &&
        <>
          <span className="text-primary">Шаг {props.currentStep}:</span> {props.question}
        </>
      }
    </div>

    <div className={`questions-body ${props.options.length > 3 ? 'questions-body-double' : ''}`}>
      {
        props.options.map((item, index) => (
          <div className='question-body-item' key={index}>
            <div className="custom-radio question-body-item__radio">
              <input type="radio"
                     name={props.question}
                     id={item}
                     onChange={() => props.setData(props.keyName, item)}
                     checked={props.data[props.keyName] === item}
                     value={item}/>
              <span></span>
            </div>

            <label htmlFor={item} className="question-body-item__label">{item}</label>
          </div>
        ))
      }
    </div>
    {
      !props.done &&
      <div className="questions-nav">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.prevStep}>
          <circle cx="25" cy="25" r="24" stroke="#2A3548" strokeWidth="2"/>
          <path d="M14.2929 25.2929C13.9024 25.6834 13.9024 26.3166 14.2929 26.7071L20.6569 33.0711C21.0474 33.4616 21.6805 33.4616 22.0711 33.0711C22.4616 32.6805 22.4616 32.0474 22.0711 31.6569L16.4142 26L22.0711 20.3431C22.4616 19.9526 22.4616 19.3195 22.0711 18.9289C21.6805 18.5384 21.0474 18.5384 20.6569 18.9289L14.2929 25.2929ZM35 25L15 25L15 27L35 27L35 25Z" fill="#2A3548"/>
        </svg>

        <div className="btn btn--primary" onClick={props.nextStep}>далее</div>
      </div>
    }

    {
      props.done &&
      <form className="questions-nav questions-nav-final" onSubmit={props.handleSubmit}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.prevStep}>
          <circle cx="25" cy="25" r="24" stroke="#2A3548" strokeWidth="2"/>
          <path d="M14.2929 25.2929C13.9024 25.6834 13.9024 26.3166 14.2929 26.7071L20.6569 33.0711C21.0474 33.4616 21.6805 33.4616 22.0711 33.0711C22.4616 32.6805 22.4616 32.0474 22.0711 31.6569L16.4142 26L22.0711 20.3431C22.4616 19.9526 22.4616 19.3195 22.0711 18.9289C21.6805 18.5384 21.0474 18.5384 20.6569 18.9289L14.2929 25.2929ZM35 25L15 25L15 27L35 27L35 25Z" fill="#2A3548"/>
        </svg>

        <InputMask type="text"
                   placeholder="Ваш номер телефона"
                   required
                   mask="+7(999)999-99-99"
                   maskChar="_"
                   onChange={e => props.setData('phone', e.target.value)}
                   className="questions-nav-final-input"/>

        <button type='submit' className="btn btn--primary">отправить</button>

        <div className="questions-nav-final-agreement">
          Отправляя данную форму, Вы принимаете условия <a href="https://karsikko-dom.ru/info/processing/"
                                                           className="questions-nav-final-agreement__link"
                                                           target="_blank">Пользовательского соглашения</a>
        </div>
      </form>
    }

  </div>
);

export {Questions}