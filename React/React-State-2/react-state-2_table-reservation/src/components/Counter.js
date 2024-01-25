export default function Counter({ onPeopleAdd, onPeopleSubtract }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onPeopleAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onPeopleSubtract}
        >
          -
        </button>
      </div>
    </>
  );
}
