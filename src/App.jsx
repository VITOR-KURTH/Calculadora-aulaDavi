import { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const resultadoCalculo = eval(`${num1} ${operacao} ${num2}`);
    setResultado(resultadoCalculo);
  };

  return (
    <div>
      <input 
        type="number" 
        id="num1" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Número 1" 
      />
      <input 
        type="number" 
        id="num2" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Número 2" 
      />
      <select 
        id="operacao" 
        value={operacao} 
        onChange={(e) => setOperacao(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button id="calcular" onClick={calcular}>Calcular</button>
      <div id="resultado">{resultado}</div>
    </div>
  );
};

export default App;