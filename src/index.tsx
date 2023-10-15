import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QuestionContextWrapper } from './utils/context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionContextWrapper>
        <App />
      </QuestionContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);