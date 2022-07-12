import { Typography, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Container, createTheme, ThemeProvider, Button, Box } from '@material-ui/core';
import { LinearProgress  } from '@mui/material';
import {  } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinsTable = () => {
	// const [coins, setCoins] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [search, setSearch] = useState("")
	const navigate = useNavigate();

	// const [cart, setCart] = useState([]);

	const {currency, symbol, coins, setCoins, loading, setLoading, cart, setCart, search, setSearch} = CryptoState();

	const fetchCoins = async () => {
		setLoading(true)
		
		const { data } = await axios.get(CoinList(currency));
		
		setCoins(data)
		setLoading(false)
	};

	const addToCart = (cartItem) => {
		if (cart.includes(cartItem)) {
			console.log(cart)
		} else {
			setCart([...cart, cartItem]);
			console.log(cart)
		};
	};
	// console.log(coins)

	useEffect(() => {
		fetchCoins();
	}, [currency])
	

	const darkTheme = createTheme({
		palette: {
			primary:{
				main: "#fff"
			},
			type: 'dark',
		},
	});

	const handleSearch = () => {
		return coins.filter((coin)=>(
			coin.name.toLowerCase().includes(search) ||
			coin.symbol.toLowerCase().includes(search)
		))
	}

  return (
		<div>

    <ThemeProvider theme={darkTheme}>
			<Container style={{ textAlign: "center "}}>
				
					<Typography
						variant="h4"
						style ={{
							margin: 18,
							fontFamily: "Helvetica"
						}}
					>
						Top 100 Cryptocurrency List
					</Typography>

					<TextField
						label="Search for a coin.."
						variant="outlined"
						style={{marginBottom: 20, width: "100%"}}
						onChange={(e)=>setSearch(e.target.value)}
						
					/>
				
					<TableContainer>
						{
							loading ? (
								<LinearProgress style={{backgroundColor: "gold"}}/>
							):
								<Table>
									<TableHead>
										<TableRow>
											{["Coin", "Price", "24h Change", "Market Cap", "Add to Watchlist"].map((head) => (
												<TableCell key ={head} align={head==="Coin"? "" : "right"}>
													{head}
												</TableCell>
											
											))}
										</TableRow>
									</TableHead>

									<TableBody>
										{handleSearch().map(row=>{
											const profit = row.price_change_percentage_24h > 0;
											return (
												<TableRow>
													<TableCell component='th' scope='row' styles={{display:"flex", }}
														onClick={() => navigate(`/coins/${row.id}`)}
														key={row.name}
													>
														<Box sx ={{ }}>

														<img
															src={row?.image}
															alt={row.name}
															height="40"
															// style={{marginBottom: 10}}
														/>

														</Box>

														
														
														<span style = {{textTransform: "uppercase", fontSize: 17,}}>
																{row.symbol}{" "}
														</span>
														
														<span style={{color:"darkgrey"}}>{row.name}</span>
														
														


													</TableCell>

													{/* <TableCell align="left"
													onClick={() => navigate(`/coins/${row.id}`)}
													key={row.name}
													>

													</TableCell> */}

													<TableCell align="right">
														{symbol}{" "}
														{/* MAKE NUMBERS WITH COMMAS HERE  */}
														{/*  */}
														{/*  */}
														{/*  */}
														{/*  */}
														{row.current_price.toFixed(2)}
													</TableCell>

													<TableCell
														align="right"
														style={{color:profit>0 ? "rgb(14,203,129)" : "red", fontWeight:500}}
														>
															{profit && "+"}
															{row.price_change_percentage_24h.toFixed(2)}%
													</TableCell>

													<TableCell align="right">
														{symbol}{" "}
														{row.market_cap.toString().slice(0, -6)} M
													</TableCell>

													<TableCell align="right" width="10">
														<Button 
															onClick={() => addToCart(row.id)}
															key={row.name}
															variant="outlined"
															>
															Add
														</Button>
													</TableCell>

												</TableRow>
											)
										})}
									</TableBody>
								</Table>
						}
					</TableContainer>
					

			</Container>
		</ThemeProvider>

		</div>
  )
}

export default CoinsTable