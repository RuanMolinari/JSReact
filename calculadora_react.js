import React, { useState } from 'react';

function Calculadora() {
  const [display, setDisplay] = useState('0');
  const [primeiroValor, setPrimeiroValor] = useState(null);
  const [operador, setOperador] = useState(null);

  const lidarComCliqueNumero = (numero) => {
    setDisplay((prevDisplay) => (prevDisplay === '0' ? String(numero) : prevDisplay + numero));
  };

  const lidarComCliqueOperador = (proximoOperador) => {
    if (primeiroValor === null) {
      setPrimeiroValor(parseFloat(display));
    } else if (operador) {
      const resultado = calcularResultado();
      setDisplay(String(resultado));
      setPrimeiroValor(resultado);
    }
    setOperador(proximoOperador);
    setDisplay('0');
  };

  const calcularResultado = () => {
    const segundoValor = parseFloat(display);
    switch (operador) {
      case '+':
        return primeiroValor + segundoValor;
      case '-':
        return primeiroValor - segundoValor;
      case '*':
        return primeiroValor * segundoValor;
      case '/':
        return primeiroValor / segundoValor;
      default:
        return segundoValor;
    }
  };

  const lidarComCliqueIgual = () => {
    if (operador) {
      const resultado = calcularResultado();
      setDisplay(String(resultado));
      setPrimeiroValor(null);
      setOperador(null);
    }
  };

  const lidarComCliqueLimpar = () => {
    setDisplay('0');
    setPrimeiroValor(null);
    setOperador(null);
  };

  return (
    <div className="calculadora">
      <div className="display">{display}</div>
      <div className="botoes">
        <button onClick={() => lidarComCliqueLimpar()}>C</button>
        <button onClick={() => lidarComCliqueOperador('/')}>/</button>
        <button onClick={() => lidarComCliqueOperador('*')}>*</button>
        <button onClick={() => lidarComCliqueOperador('-')}>-</button>
        <button onClick={() => lidarComCliqueNumero(7)}>7</button>
        <button onClick={() => lidarComCliqueNumero(8)}>8</button>
        <button onClick={() => lidarComCliqueNumero(9)}>9</button>
        <button onClick={() => lidarComCliqueOperador('+')}>+</button>
        <button onClick={() => lidarComCliqueNumero(4)}>4</button>
        <button onClick={() => lidarComCliqueNumero(5)}>5</button>
        <button onClick={() => lidarComCliqueNumero(6)}>6</button>
        <button onClick={() => lidarComCliqueNumero(1)}>1</button>
        <button onClick={() => lidarComCliqueNumero(2)}>2</button>
        <button onClick={() => lidarComCliqueNumero(3)}>3</button>
        <button onClick={() => lidarComCliqueIgual()}>=</button>
        <button onClick={() => lidarComCliqueNumero(0)}>0</button>
        <button onClick={() => lidarComCliqueNumero('.')}>.</button>
      </div>
    </div>
  );
}

export default Calculadora;