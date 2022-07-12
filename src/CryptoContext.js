import React, { createContext, useContext, useEffect, useState } from 'react'
import { CoinList } from "./config/api";


const Crypto = createContext()

const CryptoContext = ({children}) => {
	const [currency, setCurrency] = useState("USD")
	const [symbol, setSymbol] = useState('$')
	const [search, setSearch] = useState("")

	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);
	const [cart, setCart] = useState([]);

	const [user, setUser] = useState(null);

	useEffect(() => {
		if (currency === "USD") setSymbol('$');
		else if (currency === "EUR") setSymbol("€");
	}, [currency]);


  return (
    <Crypto.Provider value = {{currency, symbol, setCurrency, coins, setCoins, loading, setLoading, cart, setCart, search, setSearch}}>
        {children}
    </Crypto.Provider>
  )
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto)
}