import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@pages/homePage';
import NotFound from '../notFound';

const Router: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="about" element={<p>about</p>}></Route>
      <Route path="blog" element={<p>blog</p>}></Route>
      <Route path="opportunities" element={<p>opportunities</p>}></Route>
      <Route path="login" element={<p>login</p>}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Router;
