import { useState } from "react";

export default function CurrencyCard({ from = true, currency = 'USD', value = 1, currencyList }) {
  return (
    <div className="currency-card">
      <div className="card-header">
        <p>{from ? 'From' : 'To'}</p>
        <select className="currency-selector" defaultChecked>
          {currencyList.map((currency) => {
            <option value={currency.toLowerCase()}>{currency}</option>
          })}
        </select>
      </div>
      <div className="card-body">

      </div>
    </div>
  )
}