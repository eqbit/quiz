import React from 'react';
import './style.css';
import {FirstSlide} from '../first-slide';
import {QuizLayout} from '../quiz-layout';

const steps = [
  {
  
  }
];

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0
    };
  }
  
  setSlide = currentStep => {
    this.setState({currentStep})
  }
  
  render() {
    return (
      <div className='quiz'>
        {
          !this.state.currentStep &&
          <FirstSlide setSlide={this.setSlide}/>
        }
        
        {
          this.state.currentStep &&
            <QuizLayout currentStep={this.state.currentStep}/>
        }
      </div>
    )
  }
};

export {Quiz}