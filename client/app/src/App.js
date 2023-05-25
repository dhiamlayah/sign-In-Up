import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element ={<Register/>}/>
          <Route path='/login' element ={<Login/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
