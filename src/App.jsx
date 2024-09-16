import { useState, useEffect, useRef } from 'react';
import './App.css';
import CurrencyCard from './components/CurrencyCard';
import SwapSelectorsButton from "./components/SwapSelectorsButton";


function App() {
  const [currencies, setCurrencies] = useState(null);
  const [fromSelectorValue, setFromSelectorValue] = useState("USD");
  const [toSelectorValue, setToSelectorValue] = useState("BRL");
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(1);

  const fromInputRef = useRef();

  const date = new Date();
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  useEffect(() => {
    async function getCurrencies() {
      const response = await fetch('https://api.frankfurter.app/currencies');
      const data = await response.json();
      const list = [];
      for (const prop in data) {
        list.push(prop);
      }
      setCurrencies(list);
    }
    getCurrencies();
    
  }, []);

  useEffect(convert, [fromInputRef, fromSelectorValue, toSelectorValue]);

  function convert() {
    fetch(`https://api.frankfurter.app/latest?amount=${fromInputRef.current.value}&from=${fromSelectorValue}&to=${toSelectorValue}`)
    .then(res => res.json())
    .then((data) => {
      data.rates && setToValue(data.rates[`${toSelectorValue}`]);
    })
  }

  function swapSelectors() {
    const oldFromSelector = fromSelectorValue;
    const oldToSelector = toSelectorValue;

    setFromSelectorValue(oldToSelector);
    setToSelectorValue(oldFromSelector);

    convert();
  }

  return (
    <main id='app'>
      <header className='header'>
        <h1 className='title'>DinDin</h1>
        <p className='desc'>Convert between currencies</p>
      </header>
      <div className='content'>
        <CurrencyCard
          from={true}
          inputRef={fromInputRef}
          currencies={currencies}
          value={fromValue}
          setValue={setFromValue}
          selectValue={fromSelectorValue}
          setSelectValue={setFromSelectorValue}
          execConvert={convert}
        />
        <SwapSelectorsButton onClick={swapSelectors} />
        <CurrencyCard
          from={false}
          currencies={currencies}
          value={toValue}
          selectValue={toSelectorValue}
          setSelectValue={setToSelectorValue}
        />
      </div>
      <footer className='footer'>
        <p>{month[date.getMonth()]} {date.getDay()}, {date.getFullYear()}</p>
      </footer>
    </main>
  )
}

export default App
