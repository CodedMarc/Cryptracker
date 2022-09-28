import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Coin from './Coin.js'

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";


  useEffect(() => {
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setCoins(res.data);
      })
      .catch(e => console.log(e))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })



  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Cryptracker</h1>
        <form>
          <input
            type="text"
            placeholder="Search Coins..."
            className='coin-input'
            onChange={handleChange}
          />

        </form>

        <div className="coin-labels">
          <h3 className="name-label">coin</h3>
          <h3 className="price-label">price</h3>
          <h3 className="volume-label">volume</h3>
          <h3 className="percent-label">+/- 24h</h3>
          <h3 className="mktcap-label">market cap</h3>
        </div>
      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        )
      })}


    </div>
  );
}

export default App;
