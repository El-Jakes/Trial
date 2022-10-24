export default function Display({ input, result }) {
  return (
    <div className="display-container">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    </div>
  );
}
