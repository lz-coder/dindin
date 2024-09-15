import { useState, useEffect } from 'react';
import './App.css';
import CurrencyCard from './components/CurrencyCard';
import SwapSelectorsButton from "./components/SwapSelectorsButton";


function App() {
  const [currencies, setCurrencies] = useState(null);
  const [fromSelectorValue, setFromSelectorValue] = useState("USD");
  const [toSelectorValue, setToSelectorValue] = useState("BRL");


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

  return (
    <main id='app'>
      <header className='header'>
        <h1 className='title'>DinDin</h1>
        <p className='desc'>Convert between currency</p>
      </header>
      <div className='content'>
        <CurrencyCard
          from={true}
          currencies={currencies}
          value={1}
          selectValue={fromSelectorValue}
          setSelectValue={setFromSelectorValue}
        />
        <SwapSelectorsButton />
        <CurrencyCard
          from={false}
          currencies={currencies}
          value={1}
          selectValue={toSelectorValue}
          setSelectValue={setToSelectorValue}
        />

      </div>
    </main>
  )
}

export default App
