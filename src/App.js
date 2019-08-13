import React from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Quiz} from './components/quiz';

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <Quiz/>
      </main>
      <Footer/>
    </div>
  )
};

export {App}
