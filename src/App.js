
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

//page components 
import {Home} from './pages/Home/Home'
import {Create} from './pages/Create/Create.js'
import {Recipe} from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'

//styles
import './App.css'
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/recipes/:id' element={<Recipe/>}/>
        <Route path='/search' element={<Search />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
