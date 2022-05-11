import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Details } from '../Details/';
import { Home } from '../Home/';
import { Register } from '../Register/';

export const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:uid' element={<Details />} />
        <Route path='/register/:newuid' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
