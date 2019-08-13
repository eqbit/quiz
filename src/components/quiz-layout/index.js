import React from 'react';
import './style.css';

const QuizLayout = props => (
  <div className='container'>
    <div className="quiz-layout">
      {props.currentStep}
    </div>
  </div>
);

export {QuizLayout}