import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Malaysia Housing Loan Calculator
        </h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Loan Amount (RM)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Interest Rate (% per year)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Loan Tenure (Years)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={calculate}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate
        </motion.button>

        <AnimatePresence>
          {monthlyPayment && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mt-4 text-lg text-green-700 font-semibold"
            >
              Monthly Payment: RM {monthlyPayment}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default App;
