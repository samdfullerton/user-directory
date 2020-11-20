import Header from "./components/Header.js"
import api from "./utils/Api.js"
import Table from "./components/Table.js"
import Search from "./components/Search.js"
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Table/>
      
      
    </div>
  );
}

export default App;
