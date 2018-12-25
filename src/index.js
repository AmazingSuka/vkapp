import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});
const Sequelize = require('sequelize');

const sequelize = new Sequelize('cotopesDb', 'root', 'qwertyAhuel', {
    host: 'cotopesinstance.cmdc44d5brv4.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT 
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));