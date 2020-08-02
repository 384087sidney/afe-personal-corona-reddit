import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cabecalho from './components/Cabecalho';
import CoronaBR from './components/CoronaBR';
import CoronaALL from './components/CoronaALL';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
    <main className="main-nav">
      <CoronaBR />
      <CoronaALL />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
