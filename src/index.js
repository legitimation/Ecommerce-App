import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import main from "./components/main";
import login from "./components/login";
// import visual from "./components/visual";
// import mypage from "./components/mypage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" component = {login} />
      {/* <Route path="/visual" component = {visual} /> */}
      <Route exact path="/" component = {main}/>
      {/* <Route path="/mypage" component = {mypage} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
