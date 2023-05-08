import { Box } from "@mui/material";
import Networks from "./networks";
import Shows from "./shows";
import People from "./people";

export default function Home() {
  return (
    <Box>
      <Shows />
      <People />
      <Networks />
    </Box>
  );

  // if (router.pathname === '/show/[id]') {
  //   return (
  //     <Provider store={store}>
  //       <NavBar/>
  //       <ShowDetails id={router.query.id} />
  //     </Provider>
  //   )
  // } else if (router.pathname === '/people') {
  //   // People page
  //   return (
  //     <Provider store={store}>
  //        <NavBar/>
  //       <People />
  //     </Provider>
  //   )
  // } else {
  //   // Shows page (default)
  //   return (
  //     <Provider store={store}>
  //        <NavBar/>
  //       <Shows />
  //     </Provider>
  //   )
  // }
}
