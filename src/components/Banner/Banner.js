import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import Carousel from './Carousel';


const Banner = () => {
  return (
      <Container maxWidth="fixed" sx={{     
				backgroundImage: "url(./test1.webp)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100%",
				
				height: 200,
				display: "flex",
				flexDirection: "column",
				paddingTop: 15,
				justifyContent: "space-around"

			}}>
				<div>
				<Box sx={{
					display: "flex",
					height:"40%",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "center",
				}}
				>

					<Typography
						variant="h2"
						style ={{
							fontWeight: "bold",
							// marginBottom: 1,
							fontFamily: "Helvetica"
						}}
					>
						Welcome Page
					</Typography>

					<Typography
						variant="subtitle2"
						style ={{
							fontWeight: "darkgrey",
							textTransform: "capitalize",
							fontFamily: "Helvetica"
						}}
					>
						where stuff happens
					</Typography>

					<Carousel/>
				</Box>
				</div>
			</Container>

  )
}

export default Banner