import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes, Route, Switch} from 'react-router-dom';
import Signin from './components/Signin';
import Landing from './components/Landing';
import Signup from './components/Signup';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/signup" exact component={<Signup/>}/>
          <Route path="/signin"exact component={<Signin />} />
          <Route path="/" exact component={<Home />} />
          <Route path="/Home" exact component={<Landing/>}/>
        </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
