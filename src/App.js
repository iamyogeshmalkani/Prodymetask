
import './App.css';
import Leftside from './leftside';
import Rightside from './rightside';

function App() {
  return (
    <div className="App" style={{width: "100%",display: "flex",flexDirection: "row"}}>
     <Leftside/>
     <Rightside/>
     
    </div>
  );
}

export default App;
