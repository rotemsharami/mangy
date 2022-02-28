import React, { FC } from 'react';
import './Content.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home/Home';
import Expenses from '../Expenses/Expenses';
import Income from '../Income/Income';


interface ContentProps {}

const Content: FC<ContentProps> = () => (
  <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="income" element={<Income />} />
          </Routes>
  </div>
);

export default Content;
