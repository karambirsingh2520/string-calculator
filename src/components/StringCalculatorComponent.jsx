import React, { useState } from "react";
import { add } from "../utils/stringCalculator";

const StringCalculatorComponent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧮 String Calculator</h2>
      <textarea
        rows={4}
        style={{ width: "100%" }}
        placeholder='e.g. "1,2" or "//;\n1;2"'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate} style={{ marginTop: 10 }}>
        Calculate
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {result !== null && !error && <p>Result: {result}</p>}
    </div>
  );
};

export default StringCalculatorComponent;
