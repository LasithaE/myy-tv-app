import { Box } from "@mui/material";
import Shows from "./shows";
import People from "./people";
import { Provider } from "react-redux";
import { store } from "../redux/store";
export default function Home() {
  return (
    <Provider store={store}>
      <Box>
        <Shows />
        <People />
      </Box>
      </Provider>
  );
}
