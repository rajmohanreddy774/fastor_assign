import './App.css';
import Home from './components/Home';
// import {Routes, Route} from 'react-router-dom';
// import Signin from './components/Signin';
 
function App() {
  return (
    <div className="App">
      <Home />
      {/* <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
        </Routes> */}
    </div>
  );
}

export default App;
