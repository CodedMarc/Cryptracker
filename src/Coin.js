import React from 'react'
import './Coin.css'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (

        <div className='coin-container'>

            <div className="coin-row">

                <div className="coin">
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className="mobile-container">
                    <div className="mobile-labels">
                        <h3>Price</h3>
                        <h3>Volume</h3>
                        <h3>+/- 24hr</h3>
                        <h3>Market Cap</h3>
                    </div>
                    <div className="mobile-data">
                        <div className="coin-data">
                            <p className="coin-price">${price.toLocaleString()}</p>
                            <p className='coin-volume'>${volume.toLocaleString()}</p>
                            {priceChange < 0 ? (
                                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                            )
                            }
                            <p className="coin-marketcap">
                                ${marketcap.toLocaleString()}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Coin
