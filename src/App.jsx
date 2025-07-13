import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculate = () => {
    const P = parseFloat(amount);
    const r = parseFloat(interest) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (!P || !r || !n) {
      setMonthlyPayment(null);
      return;
    }

    const payment = (P * r) / (1 - Math.pow(1 + r, -n));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2>🇲🇾 Housing Loan Calculator</h2>
      <label>Loan Amount (RM):</label>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />

      <label>Interest Rate (% per year):</label>
      <input type="number" value={interest} onChange={e => setInterest(e.target.value)} />

      <label>Loan Tenure (Years):</label>
      <input type="number" value={years} onChange={e => setYears(e.target.value)} />

      <button onClick={calculate}>Calculate</button>

      {monthlyPayment && (
        <div style={{ marginTop: '20px' }}>
          <strong>Monthly Payment:</strong> RM {monthlyPayment}
        </div>
      )}
    </div>
  );
}

export default App;
