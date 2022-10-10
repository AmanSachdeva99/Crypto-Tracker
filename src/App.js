import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Coin from './Coin';
function App() {

  const [data,setData]=useState([])
  const [search,setSearch]=useState('')


useEffect(()=>{
  getData()
},[])

  const getData=(e)=>{
    console.log(e)
    axios.get(e?`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${e}&page=1&sparkline=false`:`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  }
  const getIt=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search)
  }

  
 const filterCoin=data?.filter((d)=>d.name.toLowerCase().includes(search.toLowerCase()))

  

  return (
    <div className='coin-app'>
      <h1 className='coin-text'>Crypto Tracker</h1>
      <div className='coin-search'>
      
    <form>
    <input type="text" className='coin-input' style={{marginRight:"100px"} } placeholder='Get top 10 Coins  Type: 10' onChange={(e)=>getData(e.target.value)}></input>
    <input type="text" onChange={getIt} className='coin-input' placeholder='Search by Coin Name'></input>
      </form>
</div>
       
          
          {filterCoin?.map((d)=>{
            return(
              <Coin d={d}/>
    
            )
          })}

         </div> 

  );
}

export default App;
