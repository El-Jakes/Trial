export default function Button({ symbol, color, handleClick }) {
  return (
    <div
      className="btn-container"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </div>
  );
}
