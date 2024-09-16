import swapSelectorsImg from "../assets/swap-selectors.png";
import "./styles/swap-selectors-button.css";

export default function SwapSelectorsButton({ onClick }) {
  return (
    <button className="swap-selectors-button" onClick={onClick}>
      <img src={swapSelectorsImg}></img>
    </button>
  )
}