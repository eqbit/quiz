import React from 'react';
import './style.css';
import {Questions} from "../questions";
import {Bonus} from "../bonus";
import {Advantages} from "../advantages";

const steps = [
  {
    question: 'Что планируете построить?',
    key: 'type',
    options: [
      'Баня',
      'Коттедж',
      'Дом'
    ]
  },
  {
    question: 'Выберите количество этажей',
    key: 'stages',
    options: [
      '1 этаж',
      '2 этажа',
      'Более 2 этажей'
    ]
  },
  {
    question: 'Выберите площадь помещения',
    key: 'area',
    options: [
      'до 50 кв.м.',
      '50 - 100 кв.м.',
      '100 - 150 кв.м.',
      '150 - 200 кв.м.',
      '200 - 250 кв.м.',
      'Более 250 кв.м.'
    ]
  },
  {
    question: 'Какой бюджет планируете?',
    key: 'budget',
    options: [
      'До 1 млн.руб.',
      '1 - 2 млн.руб.',
      '2 - 3 млн.руб.',
      'Более 3 млн.руб.',
      'Нужна консультация'
    ]
  },
  {
    question: 'Подарок',
    key: 'gift',
    options: [
      'Наружная сейф-дверь',
      'Скидка на строительство 50 000 руб.'
    ]
  }
];

const QuizLayout = props => (
  <div className='container'>
    <div className="quiz-layout">
      <div className="quiz-layout-left">
        <Questions question={steps[props.currentStep - 1].question}
                   options={steps[props.currentStep - 1].options}
                   keyName={steps[props.currentStep - 1].key}
                   nextStep={props.nextStep}
                   prevStep={props.prevStep}
                   setData={props.setData}
                   data={props.data}
                   done={props.currentStep >= steps.length}
                   currentStep={props.currentStep}/>
        <Bonus/>
      </div>
      <Advantages/>
    </div>
  </div>
);

export {QuizLayout}