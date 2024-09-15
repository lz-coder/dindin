import { useState, useEffect } from "react";
import "./styles/currency-card.css";

export default function CurrencyCard({
  from = true,
  value = 1,
  currencies,
  setSelectValue,
  selectValue
}) {
  
  function selectorChangeHandlder(e) {
    setSelectValue(e.target.value);
  }

  return (
    <div className="currency-card">
      <div className="card-header">
        <p className="selector-title">{from ? 'From' : 'To'}</p>
        <select className="currency-selector" value={selectValue} onChange={selectorChangeHandlder}>
          {currencies && currencies.map((currency, index) => {
            return (
              <option
                key={index}
                value={currency}
                className="currency-option"
              >
                {currency}
              </option>
            )
          })}
        </select>
      </div>
      <div className="card-body" style={{ backgroundColor: from ? '#B4B4B4' : '#79E99F' }}>
        {value}
      </div>
    </div>
  )
}