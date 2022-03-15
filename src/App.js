import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
