import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

// export const SearchContext = React.createContext();

function App() {
  // const [searchValue, setSearchValue] = React.useState("");

  return (
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/* <Route path="pizza/:id" element={<FullPizza />}></Route> */}
        <Route path="cart" element={<Cart />}></Route>
      </Route>
    </Routes>
    // </SearchContext.Provider>
  );
}

export default App;
