
import './App.css'; 
import { SearchBar } from  './components/searchBar';
import  Placename  from './place.json';
function App() {
  
  return (
    <div className="App">

      <div className="search-Bar-container">
        <SearchBar placeholder="type places..." data={Placename}/>
      {/* <div>searchBar</div> */}
      {/* <div >Search Results</div> */}
      </div>
  </div>
  );
}

export default App;
