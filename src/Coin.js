import React from 'react'
import './Coin.css'

const Coin = ({d}) => {
  return (
    <div className='coin-container'>
    <div className='coin-row'>
      <div className='coin'>
        <img src={d.image} alt='crypto' />
        <h1>{d.name}</h1>
        <p className='coin-symbol'>{d.symbol}</p>
      </div>
      <div className='coin-data'>
        <p className='coin-price'>${d.current_price}</p>
        <p className='coin-volume'>${d.total_volume.toLocaleString()}</p>

          <p className={d.price_change_percentage_24h>0?'coin-percent green':'coin-percent red'}>{d.price_change_percentage_24h.toFixed(2)}%</p>
          <p className='coin-marketcap'>
            MRKT-Cap: ${d.market_cap.toLocaleString()}
          </p>

      </div>
    </div>
  </div>
  )
}

export default Coin
