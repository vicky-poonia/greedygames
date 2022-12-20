import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Apifetch from './components/fetchdata/Apifetch';

function App() {
  return (
    <div className="App">
      <Apifetch />
    </div>
  );
}

export default App;
