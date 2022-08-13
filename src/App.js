import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";

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
              <Route path="/pizza/:id" element={<FullPizza />}></Route>
              {/* http://localhost:3000/pizza/5 */}
              {/* {pizzaId: '5'} */}
              {/* <Route path="/pizza/:pizzaId/:color" element={<FullPizza />}></Route> */}
              {/* {pizzaId: '4', color: 'green'} */}
              <Route path="cart" element={<Cart />}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
