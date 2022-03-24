import "./style.css";

/**
 * Item component
 *
 * @param {string} title
 * @param {string} description
 * @returns {Component}
 */
function Item({ title, description }) {
  return (
    <div data-testid="cardTestId" className="card">
      <h1 data-testid="titleTestId">{title.substring(0, 5)}</h1>
      <p data-testid="descTestId">{description}</p>
    </div>
  );
}
export default Item;
