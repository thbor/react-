
import App from './App';
import React  from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
// import About from "./About"
// import Users from "./User"
import * as serviceWorker from "./serviceWorker";
moment.locale('zh-cn');
render(
    <App />, document.getElementById('root'));
serviceWorker.unregister();