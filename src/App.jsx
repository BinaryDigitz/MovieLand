import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/exportComp";

function App() {
  // const API_URL =  'http://www.omdpapi.com?apikey=229fa716'
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=229fa716";

  async function fetchMovies(title) {
    try {
      const response = await fetch(`${API_URL}&S=${title}`);
      const data = await response.json();
      console.log(data);
    } catch (ex) {
      toast.error(ex.message);
    }
  }
  useEffect(() => {
    fetchMovies("spiderman");
  }, []);
  return (
    <div>
      <header>header</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
