import React from 'react';
import './style.css';
import {FirstSlide} from '../first-slide';
import {QuizLayout} from '../quiz-layout';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
      data: {
        type: 'Баня',
        stages: '1 этаж',
        area: 'до 50 кв.м.',
        budget: 'До 1 млн.руб.',
        gift: 'Наружная сейф-дверь'
      }
    };
  }

  setSlide = currentStep => {
    this.setState({currentStep})
  };

  nextStep = () => {
    this.setSlide(this.state.currentStep + 1)
  };

  prevStep = () => {
    this.setSlide(this.state.currentStep - 1)
  };

  setData = (key, value) => {
    this.setState(prevState => {
      prevState.data[key] = value;
      return prevState;
    })
  };

  render() {
    return (
      <div className='quiz'>
        {
          !this.state.currentStep &&
          <FirstSlide setSlide={this.setSlide}/>
        }

        {
          this.state.currentStep
          ? <QuizLayout currentStep={this.state.currentStep}
                      data={this.state.data}
                      setData={this.setData}
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}/>
          : null
        }
      </div>
    )
  }
};

export {Quiz}