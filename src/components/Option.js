export default function Option({ option, qId }) {
  return (
    <div className="options">
      <input type="radio" id="option" name={qId} required value={option} />
      <label htmlFor="option">{option}</label>
    </div>
  );
}
