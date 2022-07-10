import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './pages/home/home';
import SignUp from './pages/signup/signup';
import SignIn from './pages/signin/signin';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
