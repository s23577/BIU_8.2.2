import React from 'react';
import { useParams } from 'react-router-dom';

const Calculator = () => {
  const { operation } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const x = parseFloat(searchParams.get('x'));
  const y = parseFloat(searchParams.get('y'));

  let result;

  switch (operation) {
    case 'add':
      result = x + y;
      break;
    case 'sub':
      result = x - y;
      break;
    case 'mul':
      result = x * y;
      break;
    case 'div':
      result = x / y;
      break;
    default:
      result = 'error';
  }

  return (
    <>
      {result === 'error' ? (
        <h2 style={{ color: 'red' }}>Nieznana operacja</h2>
      ) : (
        <h1>Twój wynik: {result}</h1>
      )}
    </>
  );
};

export default Calculator;
