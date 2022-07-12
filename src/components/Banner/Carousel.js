import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContext'

const Carousel = () => {

	const [trending, setTrending] = useState([])

	const { currency } = CryptoState();

	const fetchTrendingCoins = async() => {
		const { data } = await axios.get(TrendingCoins(currency))

		setTrending(data);
		};
		
		console.log(trending)

		useEffect(() => {
			fetchTrendingCoins();
		}, [currency])
		

  return (
    <div>
        <Box sx={{
					height: "50%",
					display: "flex",
					alignItems: "center",
				}}>
          More stuff!
        </Box>
    </div>
  )
}

export default Carousel