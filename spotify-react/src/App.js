import React, { useState } from "react";
import "./App.css";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";
import Main from "./main/main";

function App() {
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);

  return (
    <div className="App">
      <Sidebar />
      <main className="main-container">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <Main searchInput={searchInput} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
