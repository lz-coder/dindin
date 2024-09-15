import swapSelectorsImg from "../assets/swap-selectors.png";

export default function SwapSelectorsButton({ onClick }) {
  return (
    <button className="swap-selector-button" onClick={onClick}>
      <img src={swapSelectorsImg}></img>
    </button>
  )
}