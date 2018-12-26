import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});

const { Pool } = require('pg');
const config = {
    user: 'root',
    database: 'cotopesDb',
    password: 'qwertyAhuel',
    host: 'cotopesinstance.cmdc44d5brv4.us-east-2.rds.amazonaws.com',
    port: 5432,
    max: 10,
};
const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT 
// registerServiceWorker();

ReactDOM.render(<App/>, document.getElementById('root'));