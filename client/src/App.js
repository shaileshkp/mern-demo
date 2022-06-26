import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './core/navbar/navbar';
import SignUp from './components/signup/signup';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignUp />
    </div>
  );
}

export default App;
