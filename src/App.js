import Header from "./components/Header.js"
import api from "./utils/Api.js"
import Table from "./components/Table.js"
import { useState } from "react"
function App() {
  return (
    <div className="App">
      <Header/>
      <Table/>
      
      
    </div>
  );
}

export default App;
