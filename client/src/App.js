import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './core/navbar/navbar';
import SignUp from './components/signup/signup';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SignUp /> */}
      <Login />
    </div>
  );
}

export default App;
