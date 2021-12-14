import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="justify-center flex my-10">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<CoinList coins={coins} />} />
          <Route path="coin/:id" element={<Coin />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="books" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
