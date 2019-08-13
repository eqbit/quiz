import React from 'react';
import './style.css';
import {FirstSlide} from '../first-slide';
import {QuizLayout} from '../quiz-layout';
import axios from 'axios';

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
        gift: 'Наружная сейф-дверь',
        phone: ''
      },
      success: false
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

  handleSubmit = e => {
    e.preventDefault();

    const arrow = this;

    axios.get('https://karsikko-dom.ru/qwiz.php', {
      params: this.state.data
    })
      .then(function (response) {
        arrow.setState({
          success: true
        })
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  render() {
    return (
      <div className='quiz'>
        {
          !this.state.currentStep
            ? <FirstSlide setSlide={this.setSlide}/>
            : <QuizLayout currentStep={this.state.currentStep}
                      data={this.state.data}
                      setData={this.setData}
                      success={this.state.success}
                      handleSubmit={this.handleSubmit}
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}/>
        }
      </div>
    )
  }
};

export {Quiz}