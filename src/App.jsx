import { useState } from "react";
import { AppHeader } from "./components/appHeader.jsx";
import { AppMain } from "./components/appMain.jsx";
import { AppFooter } from "./components/appFooter.jsx";

function App() {
  return (
    <>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
      <AppFooter></AppFooter>
    </>
  );
}

export default App;
