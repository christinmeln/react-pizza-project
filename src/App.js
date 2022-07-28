import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route path="cart" element={<Cart />}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
