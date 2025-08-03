import React from "react";
import logo from "./logo.svg";
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
          {/* <header className="App-header"> */}
          <Header />
          <Box sx={{ display: "flex" }}>
            <NavBar />
            <GridItems />
          </Box>
          <ModalItem />
          {/* <Box sx={{ display: "inline", width: "85vw" }}></Box> */}
          {/* <Grid /> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* </header> */}
        </ModalContextProvider>
      </MenuStatusProvider>
    </div>
  );
}

export default App;
