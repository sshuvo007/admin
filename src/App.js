import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout';
import Home from './view/home';
import './App.css';
import routers from './routers/model';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          {
            routers.map((item, i) => {
              return <Route key={i} path={item.path} element={item.element} />
            })
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
