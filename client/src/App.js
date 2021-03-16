import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Items from './Components/Items';


function App() {
  return (
    <Route exact path="/" component={Items}/>
  );
}

export default App;
