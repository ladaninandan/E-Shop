import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ManProduct from './store/main';
import 'bootstrap/dist/css/bootstrap.min.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode >

    <Provider store={ManProduct}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
