import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout';
import Home from './view/home';
import './App.css';

function App() {
  return (
      <BrowserRouter>
    <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
    </Layout>
      </BrowserRouter>
  );
}

export default App;
