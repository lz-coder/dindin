import "./styles/currency-card.css";

export default function CurrencyCard({
  from = true,
  inputRef,
  value,
  setValue,
  currencies,
  setSelectValue,
  selectValue,
  execConvert,
}) {

  function selectorChangeHandlder(e) {
    setSelectValue(e.target.value);
  }

  function fromInputChangeValueHandler(e) {
    setValue(e.target.value);
    execConvert();
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
        <input ref={inputRef} value={value} onChange={fromInputChangeValueHandler} disabled={!from}></input>
      </div>
    </div>
  )
}