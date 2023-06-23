import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './Calculator';

const App = () => {
  return (
    <Router>
      <h1>
        {' '}
        Defaultowe operacje w linkach, <br /> podaj swoje własne w URL, by
        używać kalkulatora ;)
      </h1>
      <ul>
        <li>
          <Link to="/add?x=2&y=3">Dodawanie</Link>
        </li>
        <li>
          <Link to="/sub?x=5&y=2">Odejmowanie</Link>
        </li>
        <li>
          <Link to="/mul?x=4&y=3">Mnożenie</Link>
        </li>
        <li>
          <Link to="/div?x=10&y=2">Dzielenie</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/:operation" element={<Calculator />} />
      </Routes>
    </Router>
  );
};

export default App;
