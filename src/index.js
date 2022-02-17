import React from 'react';
import ReactDOM from 'react-dom';
import Userlist from './pages/User/Userlist'
import Register from './pages/Register';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="register" element={<Register />} />
            <Route path="user" element={<Userlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
