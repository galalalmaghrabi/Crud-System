import './App.css';
import AddUser from './components/AddUser';
import Nav from './components/Nav';
import EditUser from './components/EditUser';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Users from './components/Users';
function App() {
  return (
    <BrowserRouter>
          <Nav />
    <Routes>
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/' element={<Users />} />
        <Route path='/:id' element={<EditUser />} />

    </Routes>

    </BrowserRouter>
  );
}

export default App;
