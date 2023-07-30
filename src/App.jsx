import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import { Provider } from "react-redux";
import store from "./app/store";
import CryptoDetails from "./components/CryptoDetails";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto-currencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
            <Route path="/crypto-details/:id" element={<CryptoDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
