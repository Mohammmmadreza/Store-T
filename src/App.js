
import './App.css';
import SearchAppBar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/sidebar';
import Mainbarr from './Components/Mainbar/mainbar';
import GeratorProduct from './Components/Product/GeratorProduct';

function App() {
  return (
    <div className="App">
   <SearchAppBar />
  <Mainbarr/>
   <Sidebar/>
   <GeratorProduct/>
    </div>
  );
}

export default App;
