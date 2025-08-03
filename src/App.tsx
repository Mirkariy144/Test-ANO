import "./App.css";
import { Header } from "./components/header/Header";
import MenuStatusProvider from "./common/context/MenuStatusProvider";
import { NavBar } from "./components/navbar/NavBar";
import { GridItems } from "./components/content/cards/GridItems";
import { Box } from "@mui/material";
import { ModalContextProvider } from "./common/context/ModalContextProvider";
import { ModalItem } from "./components/content/modal/ModalItem";

function App() {
  return (
    <div className="App">
      <MenuStatusProvider>
        <ModalContextProvider>
          <Header />
          <Box sx={{ display: "flex" }}>
            <NavBar />
            <GridItems />
          </Box>
          <ModalItem />
        </ModalContextProvider>
      </MenuStatusProvider>
    </div>
  );
}

export default App;
