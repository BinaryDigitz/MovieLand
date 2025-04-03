import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/exportComp";

function App() {
  // const API_URL =  'http://www.omdpapi.com?apikey=229fa716'
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=229fa716";
 const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}
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
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input type="text" 
        value={"Superman"} 
        onChange={(event) =>  {}}
        placeholder="Search movies" />
        <img src=''
        onClick={() =>{}}
         alt="search" />
      </div>
      <div className="container">

      </div>
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
