import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { CryptoState } from '../CryptoContext';


export default function UserSidebar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const { symbol, cart, setCart, coins } = CryptoState() 

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>WatchList</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box sx={{
                backgroundColor: "#28232b",
                width: 350,
                padding: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                
            }}>
                <Typography sx={{
                    marginTop: 5,
                    color: "white",
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                    marginBottom: 2,
                }}>
                    Your Crypto List
                </Typography>
                
                <Box sx={{
                    flex: 1,
                    width: "100%",
                    backgroundColor: "#59545c",
                    borderRadius: 5,
                    padding: 2,
                    paddingTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    overflowY: "scroll",
                    color: "white"
                }}>
                    <Typography sx={{fontSize:20}}>WatchList</Typography>

                    {coins.map(coin => {
                    if (cart.includes(coin.id))
                        return (
                            <div>
                                <span>{coin.name}{"   -   "}{symbol}{coin.current_price.toFixed(2)}</span>
                            </div>
                        );
                })}
                </Box>

            </Box>
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
