import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import { red } from '@mui/material/colors';
import { greenyellow } from '@mui/material/colors';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"red",fontFamily:"cursive"}}>List of users</h1>
      
      <UserList/>
    </div>
  );
}

export default App;
