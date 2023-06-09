import { useEffect, useState } from "react";

function Coin(){
    const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=> response.json())
        .then((json)=>{
            setCoins(json);
            setLoading(false);
        });
    },[]);
    return (<div>
        <h1>코인! {loading ? "" : `(${coins.length})`}</h1>
        {loading? <strong>로딩중...</strong> : <select>
            {coins.map((coin)=>
            <option key={coin.id}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>)}
        </select>}
    </div>
    );
}

export default Coin;